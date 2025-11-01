import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const departments = [
  {
    title: 'Учебная часть',
    icon: 'GraduationCap',
    color: 'from-primary to-blue-400',
    description: 'Организация и контроль учебного процесса',
    functions: [
      'Разработка учебных программ',
      'Составление расписания занятий',
      'Контроль качества обучения',
      'Организация экзаменов',
      'Ведение учебной документации',
    ],
  },
  {
    title: 'Административный отдел',
    icon: 'Briefcase',
    color: 'from-secondary to-orange-400',
    description: 'Общее руководство и управление',
    functions: [
      'Стратегическое планирование',
      'Координация работы подразделений',
      'Взаимодействие с органами власти',
      'Кадровая политика',
      'Контроль исполнения решений',
    ],
  },
  {
    title: 'Отдел кадров',
    icon: 'Users',
    color: 'from-accent to-purple-400',
    description: 'Управление персоналом',
    functions: [
      'Подбор и прием сотрудников',
      'Ведение кадровой документации',
      'Организация обучения персонала',
      'Аттестация преподавателей',
      'Работа с трудовыми договорами',
    ],
  },
  {
    title: 'Бухгалтерия',
    icon: 'Calculator',
    color: 'from-green-500 to-emerald-400',
    description: 'Финансово-хозяйственная деятельность',
    functions: [
      'Ведение бухгалтерского учета',
      'Финансовое планирование',
      'Расчет заработной платы',
      'Налоговая отчетность',
      'Контроль расходов',
    ],
  },
  {
    title: 'Хозяйственная служба',
    icon: 'Wrench',
    color: 'from-orange-500 to-red-400',
    description: 'Обеспечение работы организации',
    functions: [
      'Обслуживание зданий и помещений',
      'Закупка материалов и оборудования',
      'Техническое обслуживание автопарка',
      'Обеспечение безопасности',
      'Хозяйственное снабжение',
    ],
  },
  {
    title: 'Методический отдел',
    icon: 'BookOpen',
    color: 'from-blue-500 to-cyan-400',
    description: 'Методическое обеспечение обучения',
    functions: [
      'Разработка методических материалов',
      'Внедрение новых технологий обучения',
      'Повышение квалификации преподавателей',
      'Контроль качества учебных программ',
      'Организация семинаров',
    ],
  },
];

export default function InfoStructure() {
  return (
    <div className="py-12 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-0">Сведения</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Структура и органы управления</h1>
          <p className="text-xl text-muted-foreground">
            Организационная структура образовательной организации
          </p>
        </div>

        <Card className="mb-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-0">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Icon name="Network" className="text-primary" />
              Органы управления
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Директор</h3>
                <p className="text-muted-foreground">
                  Единоличный исполнительный орган, осуществляющий общее руководство
                  организацией
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Педагогический совет</h3>
                <p className="text-muted-foreground">
                  Коллегиальный орган управления, рассматривающий вопросы образовательной
                  деятельности
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Общее собрание работников</h3>
                <p className="text-muted-foreground">
                  Рассматривает вопросы трудовых отношений и социального развития
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Методический совет</h3>
                <p className="text-muted-foreground">
                  Координирует методическую работу и повышение квалификации педагогов
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Структурные подразделения</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {departments.map((dept, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${dept.color}`} />
              <CardHeader>
                <div className="flex items-start gap-4 mb-2">
                  <div
                    className={`w-14 h-14 flex-shrink-0 bg-gradient-to-br ${dept.color} rounded-xl flex items-center justify-center`}
                  >
                    <Icon name={dept.icon} className="text-white" size={26} />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-1">{dept.title}</CardTitle>
                    <CardDescription className="text-sm">{dept.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm mb-3 text-muted-foreground">
                  Основные функции:
                </h4>
                <ul className="space-y-2">
                  {dept.functions.map((func, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <span>{func}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Phone" className="text-primary" />
              Контакты структурных подразделений
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium">Учебная часть</p>
                  <p className="text-sm text-muted-foreground">Кабинет 101</p>
                </div>
                <a href="tel:+78001234567" className="text-primary hover:underline">
                  доб. 101
                </a>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium">Отдел кадров</p>
                  <p className="text-sm text-muted-foreground">Кабинет 102</p>
                </div>
                <a href="tel:+78001234567" className="text-primary hover:underline">
                  доб. 102
                </a>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium">Бухгалтерия</p>
                  <p className="text-sm text-muted-foreground">Кабинет 103</p>
                </div>
                <a href="tel:+78001234567" className="text-primary hover:underline">
                  доб. 103
                </a>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium">Приемная директора</p>
                  <p className="text-sm text-muted-foreground">Кабинет 201</p>
                </div>
                <a href="tel:+78001234567" className="text-primary hover:underline">
                  доб. 201
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
