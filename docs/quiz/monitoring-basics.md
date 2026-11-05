---
superquiz:
  mode: eval
---

# Мониторинг: базовая проверка

!!! question "Какая функция PromQL корректно работает со счётчиками?"
    ---
    type: scquiz
    points: 2
    ---

    Какая функция предназначена для вычисления скорости роста счётчика и корректно обрабатывает сбросы?

    answers:
      - rate()
      - delta()
      - deriv()
      - changes()

!!! question "Что означает `up == 0` в Prometheus?"
    ---
    type: scquiz
    points: 1
    ---

    Что означает метрика `up == 0` для таргета в Prometheus?

    answers:
      - Скрап таргета не удался
      - Таргет работает нормально
      - Метрика отсутствует
      - Prometheus перезапустился

!!! question "Выберите корректные способы вычисления 95-го процентиля из гистограммы"
    ---
    type: mcquiz
    points: 3
    ---

    Какие запросы корректно вычисляют 95-й процентиль из гистограммы `http_duration_seconds_bucket`?

    answers:
      - "histogram_quantile(0.95, rate(http_duration_seconds_bucket[5m]))"
      - "histogram_quantile(0.95, sum by (le) (rate(http_duration_seconds_bucket[5m])))"
      - "quantile(0.95, http_duration_seconds_bucket)"
      - "avg(http_duration_seconds_bucket) * 0.95"

!!! question "Что такое SLI?"
    ---
    type: scquiz
    points: 1
    ---

    Что означает аббревиатура SLI в контексте SRE?

    answers:
      - Service Level Indicator — измеримый показатель уровня сервиса
      - Service Level Agreement — юридический договор
      - System Log Interface — интерфейс системных логов
      - Storage Latency Index — индекс задержки хранилища

!!! question "Какой тип метрики подходит для «текущего количества элементов в очереди»?"
    ---
    type: scquiz
    points: 1
    ---

    Какой тип метрики Prometheus лучше всего подходит для значения, которое может расти и уменьшаться?

    answers:
      - Gauge
      - Counter
      - Histogram
      - Summary