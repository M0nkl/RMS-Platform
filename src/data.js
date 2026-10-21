export const initialRobots = [
  { id: 'R-001', name: 'TransportBot-01', type: 'Транспортный', model: 'TB-200', battery: 82, status: 'working', floor: 2, task: 'Доставка расходных материалов' },
  { id: 'R-002', name: 'CleanBot-01', type: 'Мойщик пола', model: 'FC-40', battery: 64, status: 'available', floor: 1, task: 'Нет активной задачи' },
  { id: 'R-003', name: 'VacuumBot-01', type: 'Пылесос', model: 'VC-12', battery: 18, status: 'charging', floor: 1, task: 'Зарядная станция A-01' },
  { id: 'R-004', name: 'TransportBot-02', type: 'Транспортный', model: 'TB-200', battery: 91, status: 'available', floor: 3, task: 'Нет активной задачи' },
  { id: 'R-005', name: 'CleanBot-02', type: 'Мойщик пола', model: 'FC-40', battery: 43, status: 'warning', floor: 2, task: 'Требуется проверка щётки' },
]
export const initialTasks = [
  { id: 'T-104', title: 'Доставка расходных материалов', kind: 'Доставка', robotId: 'R-001', zone: 'Этаж 2 · Склад → Кабинет 204', status: 'В работе', priority: 'Высокий', time: '10:42' },
  { id: 'T-105', title: 'Уборка главного коридора', kind: 'Уборка', robotId: 'R-002', zone: 'Этаж 1 · Коридор A', status: 'Ожидает', priority: 'Обычный', time: '10:48' },
  { id: 'T-106', title: 'Очистка зоны приёмной', kind: 'Уборка', robotId: 'R-005', zone: 'Этаж 2 · Приёмная', status: 'Требует внимания', priority: 'Обычный', time: '10:51' },
  { id: 'T-107', title: 'Перевозка документов', kind: 'Доставка', robotId: 'R-004', zone: 'Этаж 3 · Архив → Офис', status: 'Завершена', priority: 'Низкий', time: '09:56' },
]
export const events = [
  { time: '10:51:24', title: 'CleanBot-02 требует внимания', detail: 'Проверка оборудования', tone: 'warning' },
  { time: '10:48:10', title: 'Создана задача T-105', detail: 'Уборка главного коридора', tone: 'info' },
  { time: '10:42:03', title: 'TransportBot-01 начал доставку', detail: 'Этаж 2 · Кабинет 204', tone: 'success' },
  { time: '10:35:47', title: 'VacuumBot-01 подключён к зарядке', detail: 'Зарядная станция A-01', tone: 'info' },
]
