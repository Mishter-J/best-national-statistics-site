(() => {
  const data = window.INDONESIA_STATS;
  const charts = window.IndonesiaCharts;
  const provinceState = { query: '', sortKey: 'population', direction: -1 };

  function byId(id) {
    return document.getElementById(id);
  }

  function sourceLine(source) {
    return `<p class="source">Source: ${source}</p>`;
  }

  function renderHeadlineCards() {
    byId('headline-grid').innerHTML = data.headline.map((item) => `
      <article class="kpi-card">
        <p class="kpi-label">${item.label}</p>
        <p class="kpi-value">${item.value}</p>
        <p class="kpi-detail">${item.detail}</p>
        ${sourceLine(item.source)}
      </article>`).join('');
  }

  function renderExploreCards() {
    byId('explore-grid').innerHTML = data.explore.map((item) => `
      <a class="explore-card" href="#${item.target}">
        <span>${item.title}</span>
        <strong>${item.figure}</strong>
        <small>${item.text}</small>
        <em>${item.source}</em>
      </a>`).join('');
  }

  function renderIndicatorCards(containerId, items) {
    byId(containerId).innerHTML = items.map((item) => `
      <article class="indicator-card">
        <p class="indicator-label">${item.label}</p>
        <p class="indicator-value">${item.value}</p>
        <p>${item.detail}</p>
        ${sourceLine(item.source)}
      </article>`).join('');
  }

  function renderOverviewChart(metric) {
    const container = byId('overview-chart');
    if (metric === 'income') {
      charts.renderLineChart(container, data.incomeTrend, { color: charts.colors.amber, decimals: 0 });
    } else {
      charts.renderLineChart(container, data.populationTrend, { color: charts.colors.teal, decimals: 1 });
    }
    document.querySelectorAll('[data-overview-metric]').forEach((button) => {
      const active = button.dataset.overviewMetric === metric;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function bindOverviewToggle() {
    document.querySelectorAll('[data-overview-metric]').forEach((button) => {
      button.addEventListener('click', () => renderOverviewChart(button.dataset.overviewMetric));
    });
  }

  function provinceTotals() {
    const population = data.provinces.reduce((sum, province) => sum + province.population, 0);
    const area = data.provinces.reduce((sum, province) => sum + province.area, 0);
    return { population, area };
  }

  function islandGroupRows() {
    const totals = provinceTotals();
    const groups = new Map();
    data.provinces.forEach((province) => {
      const current = groups.get(province.group) || { label: province.group, population: 0, provinces: 0 };
      current.population += province.population;
      current.provinces += 1;
      groups.set(province.group, current);
    });
    return [...groups.values()]
      .map((group) => ({ ...group, value: (group.population / totals.population) * 100 }))
      .sort((a, b) => b.population - a.population);
  }

  function renderPopulationSection() {
    charts.renderHorizontalBars(byId('age-chart'), data.ageGroups, {
      title: 'Two in three Indonesians are working age',
      source: 'BPS 2024',
      unit: 'share of population, %',
      labelWidth: 92
    });
    charts.renderHorizontalBars(byId('island-chart'), islandGroupRows(), {
      title: 'Java holds the majority, the east is growing',
      source: 'BPS 2024 province estimates',
      unit: 'share of national population, %',
      labelWidth: 210
    });
    renderIndicatorCards('population-indicators', data.populationIndicators);
  }

  function renderEconomySection() {
    charts.renderBarChart(byId('growth-chart'), data.growth, { color: charts.colors.teal, decimals: 2 });
    charts.renderHorizontalBars(byId('sector-chart'), data.sectors, {
      title: 'Manufacturing is the largest sector',
      source: 'BPS 2024',
      unit: 'share of GDP, %',
      labelWidth: 190
    });
    renderIndicatorCards('economy-indicators', data.economyIndicators);
  }

  function renderHealthEducationSection() {
    charts.renderLineChart(byId('life-chart'), data.lifeTrend, { color: charts.colors.blue, decimals: 1 });
    charts.renderHorizontalBars(byId('enrollment-chart'), data.enrollment, {
      title: 'Primary school is near universal',
      source: 'BPS 2023',
      unit: 'percent',
      labelWidth: 250
    });
    renderIndicatorCards('health-indicators', data.healthIndicators);
  }

  function renderClimateChart(metric) {
    const container = byId('climate-chart');
    if (metric === 'temperature') {
      charts.renderLineChart(container, data.climateTemperature, { color: charts.colors.amber, decimals: 1 });
    } else {
      charts.renderBarChart(container, data.climateRainfall, { color: charts.colors.blue, decimals: 0 });
    }
    document.querySelectorAll('[data-climate-metric]').forEach((button) => {
      const active = button.dataset.climateMetric === metric;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function bindClimateToggle() {
    document.querySelectorAll('[data-climate-metric]').forEach((button) => {
      button.addEventListener('click', () => renderClimateChart(button.dataset.climateMetric));
    });
  }

  function renderGeographySection() {
    renderIndicatorCards('geography-facts', data.geographyFacts);
    renderClimateChart('rainfall');
  }

  function provinceRowModel(province, totals) {
    return {
      ...province,
      share: (province.population / totals.population) * 100,
      density: (province.population * 1000000) / province.area
    };
  }

  function visibleProvinces() {
    const totals = provinceTotals();
    const query = provinceState.query.trim().toLowerCase();
    const rows = data.provinces
      .map((province) => provinceRowModel(province, totals))
      .filter((province) => {
        if (!query) return true;
        return [province.name, province.capital, province.group].some((value) => value.toLowerCase().includes(query));
      });
    rows.sort((a, b) => {
      const left = a[provinceState.sortKey];
      const right = b[provinceState.sortKey];
      if (typeof left === 'string') return left.localeCompare(right) * provinceState.direction;
      return (left - right) * provinceState.direction;
    });
    return { rows, totals };
  }

  function renderProvinceTable() {
    const { rows, totals } = visibleProvinces();
    byId('province-table-body').innerHTML = rows.map((province) => `
      <tr>
        <th scope="row">${province.name}</th>
        <td>${province.capital}</td>
        <td>${province.group}</td>
        <td class="number">${charts.formatNumber(province.population, 1)}</td>
        <td class="number">${charts.formatNumber(province.share, 1)}%</td>
        <td class="number">${charts.formatNumber(province.area, 0)}</td>
        <td class="number">${charts.formatNumber(province.density, 0)}</td>
      </tr>`).join('');
    byId('province-count').textContent = `Showing ${rows.length} of ${data.provinces.length} provinces`;
    byId('province-total').textContent = `National total: ${charts.formatNumber(totals.population, 1)}m people · ${charts.formatNumber(totals.area, 0)} km² · ${charts.formatNumber((totals.population * 1000000) / totals.area, 0)} people/km² (BPS 2024, rounded)`;
    document.querySelectorAll('[data-sort-key]').forEach((button) => {
      const active = button.dataset.sortKey === provinceState.sortKey;
      button.classList.toggle('is-active', active);
      button.querySelector('.sort-mark').textContent = active ? (provinceState.direction === 1 ? '▲' : '▼') : '↕';
      button.setAttribute('aria-label', `Sort by ${button.dataset.sortLabel}${active ? (provinceState.direction === 1 ? ', ascending' : ', descending') : ''}`);
    });
  }

  function renderIslandSummary() {
    byId('island-summary').innerHTML = islandGroupRows().map((group) => `
      <article class="island-card">
        <p>${group.label}</p>
        <strong>${charts.formatNumber(group.population, 1)}m</strong>
        <span>${charts.formatNumber(group.value, 1)}% · ${group.provinces} provinces</span>
      </article>`).join('');
  }

  function bindProvinceControls() {
    byId('province-search').addEventListener('input', (event) => {
      provinceState.query = event.target.value;
      renderProvinceTable();
    });
    document.querySelectorAll('[data-sort-key]').forEach((button) => {
      button.addEventListener('click', () => {
        const key = button.dataset.sortKey;
        if (provinceState.sortKey === key) {
          provinceState.direction *= -1;
        } else {
          provinceState.sortKey = key;
          provinceState.direction = key === 'name' || key === 'capital' || key === 'group' ? 1 : -1;
        }
        renderProvinceTable();
      });
    });
  }

  function bindNavigation() {
    const links = [...document.querySelectorAll('.nav-link')];
    const setActive = (id) => {
      links.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`));
    };
    links.forEach((link) => link.addEventListener('click', () => setActive(link.getAttribute('href').slice(1))));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
  }

  function initStatisticsSite() {
    renderHeadlineCards();
    renderExploreCards();
    renderOverviewChart('population');
    bindOverviewToggle();
    renderPopulationSection();
    renderEconomySection();
    renderHealthEducationSection();
    renderIslandSummary();
    renderProvinceTable();
    bindProvinceControls();
    renderGeographySection();
    bindClimateToggle();
    bindNavigation();
  }

  document.addEventListener('DOMContentLoaded', initStatisticsSite);
})();
