window.IndonesiaCharts = (() => {
  const teal = '#0f766e';
  const amber = '#d97706';
  const blue = '#2563eb';
  const ink = '#173a35';
  const muted = '#5d716c';
  const grid = '#d8e2dc';

  function formatNumber(value, decimals = 0) {
    return Number(value).toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }

  function chartFrame(title, source, body, width = 720, height = 330) {
    return `<figure class="chart-card"><figcaption><strong>${title}</strong><span>${source}</span></figcaption><svg class="chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="${title}">${body}</svg></figure>`;
  }

  function scaleValue(value, min, max, start, end) {
    if (max === min) return (start + end) / 2;
    return start + ((value - min) / (max - min)) * (end - start);
  }

  function niceTicks(min, max) {
    const span = Math.max(max - min, 1);
    const rawStep = span / 4;
    const power = 10 ** Math.floor(Math.log10(rawStep));
    const step = [1, 2, 5, 10].map((multiple) => multiple * power).find((candidate) => candidate >= rawStep) || 10 * power;
    const decimals = step < 1 ? 1 : 0;
    const ticks = [];
    for (let value = Math.ceil(min / step) * step; value <= max + 1e-9; value += step) {
      ticks.push({ value: Number(value.toFixed(6)), decimals });
    }
    return ticks;
  }

  function renderLineChart(container, series, options = {}) {
    const width = 720;
    const height = 330;
    const left = 64;
    const right = 26;
    const top = 30;
    const bottom = 48;
    const values = series.points.map((point) => point.value);
    let min = Math.min(...values);
    let max = Math.max(...values);
    const span = Math.max(max - min, 1);
    min -= span * 0.14;
    max += span * 0.16;
    const xFor = (index) => scaleValue(index, 0, series.points.length - 1, left, width - right);
    const yFor = (value) => scaleValue(value, min, max, height - bottom, top);
    const decimals = options.decimals ?? (span < 20 ? 1 : 0);
    const color = options.color || teal;
    let body = '';
    niceTicks(min, max).forEach((tick) => {
      const y = yFor(tick.value);
      body += `<line x1="${left}" y1="${y}" x2="${width - right}" y2="${y}" stroke="${grid}" stroke-width="1"/><text x="${left - 10}" y="${y + 4}" text-anchor="end" class="chart-label">${formatNumber(tick.value, tick.decimals)}</text>`;
    });
    if (min < 0 && max > 0) {
      const zeroY = yFor(0);
      body += `<line x1="${left}" y1="${zeroY}" x2="${width - right}" y2="${zeroY}" stroke="${muted}" stroke-width="1.4"/>`;
    }
    const path = series.points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${xFor(index).toFixed(1)} ${yFor(point.value).toFixed(1)}`).join(' ');
    body += `<path d="${path}" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
    series.points.forEach((point, index) => {
      const x = xFor(index);
      const y = yFor(point.value);
      const isLast = index === series.points.length - 1;
      const isPeak = point.value === Math.max(...values);
      body += `<circle cx="${x}" cy="${y}" r="${isLast || isPeak ? 5.5 : 3.6}" fill="${color}"/>`;
      if (isLast || isPeak || index === 0) {
        body += `<text x="${x}" y="${y - 12}" text-anchor="middle" class="chart-value">${formatNumber(point.value, decimals)}</text>`;
      }
      if (series.points.length <= 6 || index % 2 === 0 || isLast) {
        body += `<text x="${x}" y="${height - 16}" text-anchor="middle" class="chart-label">${point.year || point.label}</text>`;
      }
    });
    body += `<text x="${left}" y="18" class="chart-unit">${series.unit}</text>`;
    container.innerHTML = chartFrame(series.title, series.source, body, width, height);
  }

  function renderBarChart(container, series, options = {}) {
    const width = 720;
    const height = 330;
    const left = 58;
    const right = 22;
    const top = 34;
    const bottom = 50;
    const values = series.points.map((point) => point.value);
    let min = Math.min(0, ...values);
    let max = Math.max(0, ...values);
    const span = Math.max(max - min, 1);
    max += span * 0.16;
    if (min < 0) min -= span * 0.12;
    const yFor = (value) => scaleValue(value, min, max, height - bottom, top);
    const zeroY = yFor(0);
    const slot = (width - left - right) / series.points.length;
    const barWidth = Math.min(44, slot * 0.62);
    const decimals = options.decimals ?? (span < 20 ? 1 : 0);
    let body = `<text x="${left}" y="18" class="chart-unit">${series.unit}</text>`;
    niceTicks(min, max).forEach((tick) => {
      const y = yFor(tick.value);
      body += `<line x1="${left}" y1="${y}" x2="${width - right}" y2="${y}" stroke="${grid}" stroke-width="1"/><text x="${left - 9}" y="${y + 4}" text-anchor="end" class="chart-label">${formatNumber(tick.value, tick.decimals)}</text>`;
    });
    body += `<line x1="${left}" y1="${zeroY}" x2="${width - right}" y2="${zeroY}" stroke="${muted}" stroke-width="1.4"/>`;
    series.points.forEach((point, index) => {
      const x = left + slot * index + (slot - barWidth) / 2;
      const y = yFor(point.value);
      const barTop = Math.min(y, zeroY);
      const barHeight = Math.max(Math.abs(zeroY - y), 2);
      const color = point.value < 0 ? '#dc2626' : (options.color || amber);
      body += `<rect x="${x}" y="${barTop}" width="${barWidth}" height="${barHeight}" rx="5" fill="${color}"/>`;
      body += `<text x="${x + barWidth / 2}" y="${point.value < 0 ? y + 16 : y - 7}" text-anchor="middle" class="chart-value">${formatNumber(point.value, decimals)}</text>`;
      body += `<text x="${x + barWidth / 2}" y="${height - 16}" text-anchor="middle" class="chart-label">${point.year || point.label}</text>`;
    });
    container.innerHTML = chartFrame(series.title, series.source, body, width, height);
  }

  function renderHorizontalBars(container, rows, options = {}) {
    const width = 720;
    const rowHeight = 42;
    const height = Math.max(190, rows.length * rowHeight + 58);
    const labelWidth = options.labelWidth || 210;
    const left = labelWidth + 18;
    const right = 82;
    const max = Math.max(...rows.map((row) => row.value), 1);
    const suffix = options.suffix || '%';
    const decimals = options.decimals ?? 1;
    let body = `<text x="0" y="20" class="chart-unit">${options.unit || 'share of total, %'}</text>`;
    rows.forEach((row, index) => {
      const y = 42 + index * rowHeight;
      const barWidth = ((width - left - right) * row.value) / max;
      const color = index % 3 === 0 ? teal : (index % 3 === 1 ? amber : blue);
      body += `<text x="${labelWidth}" y="${y + 17}" text-anchor="end" class="chart-row-label">${row.label}</text>`;
      body += `<rect x="${left}" y="${y}" width="${Math.max(barWidth, 3)}" height="22" rx="6" fill="${color}"/>`;
      body += `<text x="${left + barWidth + 9}" y="${y + 16}" class="chart-value">${formatNumber(row.value, decimals)}${suffix}</text>`;
    });
    container.innerHTML = chartFrame(options.title || 'Breakdown', options.source || '', body, width, height);
  }

  return { formatNumber, renderLineChart, renderBarChart, renderHorizontalBars, colors: { teal, amber, blue, ink } };
})();
