# Простой health-check на Python

**Задача:** проверить, что сервис отдаёт 200, и упасть с ненулевым кодом, если нет — удобно для cron/CI.

```python
import sys
import urllib.request

url = "https://example.com/healthz"
try:
    with urllib.request.urlopen(url, timeout=5) as r:
        sys.exit(0 if r.status == 200 else 1)
except Exception as e:
    print(f"FAIL: {e}", file=sys.stderr)
    sys.exit(1)
```

**Почему работает:** `urlopen` с `timeout` не даёт зависнуть, `sys.exit(0/1)` даёт корректный код возврата для мониторинга и CI.

