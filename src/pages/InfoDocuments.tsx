import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const documentCategories = [
  {
    title: 'Учредительные документы',
    icon: 'FileText',
    color: 'from-primary to-blue-400',
    documents: [
      { name: 'Устав организации', size: '2.3 МБ', date: '15.03.2020' },
      { name: 'Свидетельство о государственной регистрации', size: '1.1 МБ', date: '23.01.2015' },
      { name: 'Свидетельство о постановке на налоговый учет', size: '0.8 МБ', date: '23.01.2015' },
    ],
  },
  {
    title: 'Лицензии и аккредитация',
    icon: 'Award',
    color: 'from-secondary to-orange-400',
    documents: [
      { name: 'Лицензия на образовательную деятельность', size: '1.5 МБ', date: '15.03.2020' },
      { name: 'Приложение к лицензии', size: '0.9 МБ', date: '15.03.2020' },
      { name: 'Свидетельство об аккредитации', size: '1.2 МБ', date: '10.06.2021' },
    ],
  },
  {
    title: 'Локальные нормативные акты',
    icon: 'ScrollText',
    color: 'from-accent to-purple-400',
    documents: [
      { name: 'Правила внутреннего распорядка обучающихся', size: '0.7 МБ', date: '01.09.2023' },
      { name: 'Положение о педагогическом совете', size: '0.5 МБ', date: '01.09.2023' },
      { name: 'Положение о методическом совете', size: '0.6 МБ', date: '01.09.2023' },
      { name: 'Правила приема обучающихся', size: '0.8 МБ', date: '01.09.2023' },
      { name: 'Режим занятий обучающихся', size: '0.4 МБ', date: '01.09.2023' },
    ],
  },
  {
    title: 'Образовательные программы',
    icon: 'BookOpen',
    color: 'from-green-500 to-emerald-400',
    documents: [
      { name: 'Программа профессионального обучения категория B', size: '3.2 МБ', date: '01.09.2024' },
      { name: 'Программа профессионального обучения категория C', size: '2.9 МБ', date: '01.09.2024' },
      { name: 'Программа профессионального обучения категория D', size: '3.1 МБ', date: '01.09.2024' },
      { name: 'Программа профессионального обучения категория A', size: '2.5 МБ', date: '01.09.2024' },
    ],
  },
  {
    title: 'Финансовые документы',
    icon: 'CreditCard',
    color: 'from-blue-500 to-cyan-400',
    documents: [
      { name: 'План финансово-хозяйственной деятельности', size: '1.8 МБ', date: '01.01.2024' },
      { name: 'Отчет о поступлении и расходовании средств', size: '2.1 МБ', date: '31.12.2023' },
      { name: 'Положение об оплате труда', size: '1.0 МБ', date: '01.01.2024' },
    ],
  },
  {
    title: 'Отчеты',
    icon: 'BarChart',
    color: 'from-orange-500 to-red-400',
    documents: [
      { name: 'Отчет о результатах самообследования 2023', size: '4.5 МБ', date: '20.04.2024' },
      { name: 'Показатели деятельности 2023', size: '1.3 МБ', date: '20.04.2024' },
      { name: 'Публичный доклад 2023', size: '3.7 МБ', date: '15.05.2024' },
    ],
  },
];

export default function InfoDocuments() {
  return (
    <div className="py-12 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-0">Сведения</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Документы</h1>
          <p className="text-xl text-muted-foreground">
            Нормативные документы и локальные акты образовательной организации
          </p>
        </div>

        <div className="space-y-6">
          {documentCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${category.color}`} />
              <CardHeader className="bg-white">
                <CardTitle className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}
                  >
                    <Icon name={category.icon} className="text-white" size={24} />
                  </div>
                  {category.title}
                </CardTitle>
                <CardDescription>
                  Документов в категории: {category.documents.length}
                </CardDescription>
              </CardHeader>
              <CardContent className="bg-slate-50/50">
                <div className="space-y-2">
                  {category.documents.map((doc, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="FileText" className="text-primary" size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{doc.name}</p>
                          <div className="flex gap-4 text-xs text-muted-foreground mt-1">
                            <span className="flex items-center gap-1">
                              <Icon name="HardDrive" size={12} />
                              {doc.size}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Calendar" size={12} />
                              {doc.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="ml-4 flex-shrink-0">
                        <Icon name="Download" size={16} className="mr-2" />
                        Скачать
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Info" className="text-primary" />
              Информация
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Все документы представлены в формате PDF. Для просмотра документов необходим Adobe
              Acrobat Reader или аналогичная программа.
            </p>
            <p className="text-sm text-muted-foreground">
              Если у вас возникли вопросы по документам, обращайтесь в приемную по телефону{' '}
              <a href="tel:+78001234567" className="text-primary hover:underline">
                +7 (800) 123-45-67
              </a>{' '}
              или по электронной почте{' '}
              <a href="mailto:info@pavlovo-dosaaf.ru" className="text-primary hover:underline">
                info@pavlovo-dosaaf.ru
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
