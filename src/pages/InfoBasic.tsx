import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function InfoBasic() {
  return (
    <div className="py-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8">
          <Badge className="mb-4 bg-primary/10 text-primary border-0">Сведения</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Основные сведения</h1>
          <p className="text-xl text-muted-foreground">
            Информация об образовательной организации
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Building2" className="text-primary" />
                Полное наименование
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                Региональное отделение Общероссийской общественно-государственной организации
                «Добровольное общество содействия армии, авиации и флоту России» Нижегородской области
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="FileText" className="text-primary" />
                Сокращенное наименование
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">РО ДОСААФ России Нижегородской области</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Calendar" className="text-primary" />
                Дата создания
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">23 января 1951 года</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="MapPin" className="text-primary" />
                Адрес организации
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Юридический адрес:</span> 606100, Нижегородская
                  область, г. Павлово, ул. Ленина, д. 123
                </p>
                <p>
                  <span className="font-semibold">Фактический адрес:</span> 606100, Нижегородская
                  область, г. Павлово, ул. Ленина, д. 123
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Phone" className="text-primary" />
                Контактные телефоны
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Приемная:</span>{' '}
                  <a href="tel:+78001234567" className="text-primary hover:underline">
                    +7 (800) 123-45-67
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Отдел кадров:</span>{' '}
                  <a href="tel:+78001234568" className="text-primary hover:underline">
                    +7 (800) 123-45-68
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Mail" className="text-primary" />
                Электронная почта
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:info@pavlovo-dosaaf.ru"
                className="text-lg text-primary hover:underline"
              >
                info@pavlovo-dosaaf.ru
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Clock" className="text-primary" />
                Режим работы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>Понедельник - Пятница: 08:00 - 20:00</p>
                <p>Суббота: 09:00 - 18:00</p>
                <p>Воскресенье: выходной</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Award" className="text-primary" />
                Лицензия
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Серия, номер:</span> 52Л01 № 0003456
                </p>
                <p>
                  <span className="font-semibold">Дата выдачи:</span> 15 марта 2020 года
                </p>
                <p>
                  <span className="font-semibold">Срок действия:</span> бессрочно
                </p>
                <p>
                  <span className="font-semibold">Орган выдавший лицензию:</span> Министерство
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
