---
superquiz:
  mode: eval
---

# Проверка знаний: Linux

!!! question "Размер журнала systemd"
    ---
    type: scquiz
    points: 2
    ---

    Какая команда покажет, сколько места занимает журнал systemd?

    answers:
      - journalctl --disk-usage
      - systemctl status
      - df -h
      - du -sh /var/log

!!! question "Сигнал по умолчанию у kill"
    ---
    type: scquiz
    points: 1
    ---

    Какой сигнал `kill` отправляет по умолчанию?

    answers:
      - SIGTERM
      - SIGKILL
      - SIGHUP
      - SIGINT

!!! question "Выбери все верные утверждения"
    ---
    type: mcquiz
    points: 3
    ---
    
    Какие из команд помогут найти, что заняло диск?

    answers:
      - du -xh / | sort -rh | head
      - journalctl --disk-usage
      - ls -la /
      - df -h