import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  return (
    <div className="py-12 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-0">Контакты</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Свяжитесь с нами</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы всегда рады ответить на ваши вопросы
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary" />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">606100, Нижегородская область, г. Павлово, ул. Ленина, д. 123</p>
                <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A12345"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Карта"
                    className="w-full h-full"
                  />
                </div>
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
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Понедельник - Пятница</span>
                    <span className="text-primary font-semibold">08:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Суббота</span>
                    <span className="text-primary font-semibold">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Воскресенье</span>
                    <span className="text-muted-foreground">Выходной</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-primary to-blue-400 text-white border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Icon name="Phone" />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+78001234567" className="text-lg hover:underline">
                    +7 (800) 123-45-67
                  </a>
                  <p className="text-sm opacity-90 mt-1">Звонок бесплатный</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-secondary to-orange-400 text-white border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Icon name="Mail" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:info@pavlovo-dosaaf.ru" className="text-lg hover:underline break-all">
                    info@pavlovo-dosaaf.ru
                  </a>
                  <p className="text-sm opacity-90 mt-1">Ответим в течение дня</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-accent to-purple-400 text-white border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Icon name="MessageCircle" />
                  Социальные сети
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Button size="icon" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                    <Icon name="Youtube" size={20} />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                    <Icon name="Send" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Send" className="text-primary" />
                Напишите нам
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="example@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea rows={5} placeholder="Расскажите, чем мы можем помочь..." />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="text-center border-2 hover:border-primary/50 transition-all">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="text-white" size={28} />
              </div>
              <CardTitle>Приемная комиссия</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Консультации по обучению</p>
              <a href="tel:+78001234567" className="text-primary hover:underline font-semibold">
                +7 (800) 123-45-67
              </a>
            </CardContent>
          </Card>

          <Card className="text-center border-2 hover:border-secondary/50 transition-all">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="GraduationCap" className="text-white" size={28} />
              </div>
              <CardTitle>Учебная часть</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Вопросы по учебному процессу</p>
              <a href="tel:+78001234568" className="text-primary hover:underline font-semibold">
                +7 (800) 123-45-68
              </a>
            </CardContent>
          </Card>

          <Card className="text-center border-2 hover:border-accent/50 transition-all">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Briefcase" className="text-white" size={28} />
              </div>
              <CardTitle>Бухгалтерия</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Вопросы по оплате</p>
              <a href="tel:+78001234569" className="text-primary hover:underline font-semibold">
                +7 (800) 123-45-69
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
