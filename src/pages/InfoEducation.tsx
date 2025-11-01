import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function InfoEducation() {
  return (
    <div className="py-12 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-0">Сведения</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Образование</h1>
          <p className="text-xl text-muted-foreground">
            Информация о реализуемых образовательных программах
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="BookOpen" className="text-primary" />
                Реализуемые уровни образования
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                Профессиональное обучение - программы профессиональной подготовки водителей
                транспортных средств
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="GraduationCap" className="text-primary" />
                Формы обучения
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Очная форма</p>
                    <p className="text-muted-foreground">
                      Занятия проводятся в оборудованных классах и на учебной площадке
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Очно-заочная форма</p>
                    <p className="text-muted-foreground">
                      Теоретическая часть с применением дистанционных технологий, практика очно
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Clock" className="text-primary" />
                Нормативные сроки обучения
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="font-semibold mb-1">Категория A</p>
                  <p className="text-2xl font-bold text-primary">2 месяца</p>
                  <p className="text-sm text-muted-foreground">130 часов</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="font-semibold mb-1">Категория B</p>
                  <p className="text-2xl font-bold text-primary">3 месяца</p>
                  <p className="text-sm text-muted-foreground">190 часов</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="font-semibold mb-1">Категория C</p>
                  <p className="text-2xl font-bold text-primary">3.5 месяца</p>
                  <p className="text-sm text-muted-foreground">210 часов</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="font-semibold mb-1">Категория D</p>
                  <p className="text-2xl font-bold text-primary">4 месяца</p>
                  <p className="text-sm text-muted-foreground">240 часов</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Languages" className="text-primary" />
                Язык обучения
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Русский язык</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Users" className="text-primary" />
                Численность обучающихся
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <span className="font-medium">Общая численность обучающихся</span>
                  <span className="text-2xl font-bold text-primary">324 человека</span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground">По категориям:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex justify-between p-2 bg-slate-50 rounded">
                      <span>Категория A</span>
                      <span className="font-semibold text-primary">42</span>
                    </div>
                    <div className="flex justify-between p-2 bg-slate-50 rounded">
                      <span>Категория B</span>
                      <span className="font-semibold text-primary">198</span>
                    </div>
                    <div className="flex justify-between p-2 bg-slate-50 rounded">
                      <span>Категория C</span>
                      <span className="font-semibold text-primary">56</span>
                    </div>
                    <div className="flex justify-between p-2 bg-slate-50 rounded">
                      <span>Категория D</span>
                      <span className="font-semibold text-primary">28</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="FileCheck" className="text-primary" />
                Образовательные программы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    name: 'Профессиональная подготовка водителей категории A',
                    duration: '130 часов',
                  },
                  {
                    name: 'Профессиональная подготовка водителей категории B',
                    duration: '190 часов',
                  },
                  {
                    name: 'Профессиональная подготовка водителей категории C',
                    duration: '210 часов',
                  },
                  {
                    name: 'Профессиональная подготовка водителей категории D',
                    duration: '240 часов',
                  },
                ].map((program, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between p-4 bg-white border-2 rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <Icon name="FileText" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-medium">{program.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Объем программы: {program.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Award" className="text-primary" />
                Лицензия на образовательную деятельность
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Серия, номер:</span> 52Л01 № 0003456
                </p>
                <p>
                  <span className="font-semibold">Регистрационный номер:</span> 12345
                </p>
                <p>
                  <span className="font-semibold">Дата выдачи:</span> 15 марта 2020 года
                </p>
                <p>
                  <span className="font-semibold">Срок действия:</span> бессрочно
                </p>
                <p>
                  <span className="font-semibold">Орган, выдавший лицензию:</span> Министерство
                  образования Нижегородской области
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
