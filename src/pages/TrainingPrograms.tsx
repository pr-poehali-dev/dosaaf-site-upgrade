import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const programs = [
  {
    category: 'B',
    title: 'Категория B - Легковые автомобили',
    duration: '3 месяца',
    hours: '190 часов',
    price: 'от 30 000 ₽',
    color: 'from-primary to-blue-400',
    description: 'Обучение вождению легковых автомобилей с механической или автоматической коробкой передач',
    includes: [
      'Теоретический курс - 130 часов',
      'Практическое вождение - 56 часов',
      'Экзамены - 4 часа',
      'Учебные материалы',
      'Медицинская справка',
    ],
    requirements: [
      'Возраст от 17 лет',
      'Медицинская справка установленного образца',
      'Паспорт гражданина РФ',
    ],
  },
  {
    category: 'C',
    title: 'Категория C - Грузовые автомобили',
    duration: '3.5 месяца',
    hours: '210 часов',
    price: 'от 35 000 ₽',
    color: 'from-secondary to-orange-400',
    description: 'Обучение управлению грузовыми автомобилями свыше 3,5 тонн',
    includes: [
      'Теоретический курс - 140 часов',
      'Практическое вождение - 64 часа',
      'Экзамены - 6 часов',
      'Учебные материалы',
      'Техническая подготовка',
    ],
    requirements: [
      'Возраст от 18 лет',
      'Наличие категории B',
      'Медицинская справка установленного образца',
      'Паспорт гражданина РФ',
    ],
  },
  {
    category: 'D',
    title: 'Категория D - Автобусы',
    duration: '4 месяца',
    hours: '240 часов',
    price: 'от 40 000 ₽',
    color: 'from-accent to-purple-400',
    description: 'Обучение управлению автобусами и транспортными средствами для перевозки пассажиров',
    includes: [
      'Теоретический курс - 150 часов',
      'Практическое вождение - 80 часов',
      'Экзамены - 10 часов',
      'Учебные материалы',
      'Специализированная подготовка',
    ],
    requirements: [
      'Возраст от 21 года',
      'Наличие категории B',
      'Стаж вождения от 1 года',
      'Медицинская справка установленного образца',
      'Паспорт гражданина РФ',
    ],
  },
  {
    category: 'A',
    title: 'Категория A - Мотоциклы',
    duration: '2 месяца',
    hours: '130 часов',
    price: 'от 25 000 ₽',
    color: 'from-green-500 to-emerald-400',
    description: 'Обучение управлению мотоциклами и мотороллерами',
    includes: [
      'Теоретический курс - 90 часов',
      'Практическое вождение - 36 часов',
      'Экзамены - 4 часа',
      'Учебные материалы',
      'Защитная экипировка на время обучения',
    ],
    requirements: [
      'Возраст от 16 лет',
      'Медицинская справка установленного образца',
      'Паспорт гражданина РФ',
    ],
  },
];

export default function TrainingPrograms() {
  return (
    <div className="py-12 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-0">Обучение</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Программы обучения</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящую программу для получения водительского удостоверения
          </p>
        </div>

        <div className="space-y-8">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-xl">
              <div className={`h-2 bg-gradient-to-r ${program.color}`} />
              <CardHeader className="bg-white">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-16 h-16 flex-shrink-0 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center`}
                    >
                      <span className="text-3xl font-bold text-white">{program.category}</span>
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                      <CardDescription className="text-base">{program.description}</CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2 flex-shrink-0">
                    <div className="text-3xl font-bold text-primary">{program.price}</div>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        {program.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="BookOpen" size={16} />
                        {program.hours}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="bg-slate-50/50">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="includes">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center gap-2">
                        <Icon name="CheckCircle" className="text-primary" size={20} />
                        Что входит в программу
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 mt-2">
                        {program.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Icon name="Check" className="text-primary mt-1" size={18} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="requirements">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center gap-2">
                        <Icon name="FileCheck" className="text-primary" size={20} />
                        Требования к поступающим
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 mt-2">
                        {program.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Icon name="AlertCircle" className="text-secondary mt-1" size={18} />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="flex flex-wrap gap-3 mt-6">
                  <Button className={`bg-gradient-to-r ${program.color}`}>
                    <Icon name="UserPlus" size={18} className="mr-2" />
                    Записаться на обучение
                  </Button>
                  <Button variant="outline">
                    <Icon name="Download" size={18} className="mr-2" />
                    Скачать программу
                  </Button>
                  <Button variant="outline">
                    <Icon name="Phone" size={18} className="mr-2" />
                    Задать вопрос
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-0">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Icon name="Info" className="text-primary" />
              Дополнительная информация
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="GraduationCap" className="text-primary" size={20} />
                  Форматы обучения
                </h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Стандартный курс (будние дни)</li>
                  <li>• Вечерний курс (после 18:00)</li>
                  <li>• Выходного дня (суббота, воскресенье)</li>
                  <li>• Интенсивный курс</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="CreditCard" className="text-primary" size={20} />
                  Способы оплаты
                </h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Полная оплата со скидкой 5%</li>
                  <li>• Рассрочка на 3 месяца</li>
                  <li>• Банковский перевод</li>
                  <li>• Наличные в офисе</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
