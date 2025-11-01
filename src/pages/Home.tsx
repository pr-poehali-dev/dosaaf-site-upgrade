import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const features = [
  {
    icon: 'Award',
    title: 'Опытные инструкторы',
    description: 'Квалифицированные преподаватели с многолетним стажем',
  },
  {
    icon: 'Car',
    title: 'Современный автопарк',
    description: 'Новые учебные автомобили с автоматической и механической КПП',
  },
  {
    icon: 'Shield',
    title: 'Лицензия и аккредитация',
    description: 'Все необходимые документы и разрешения на образовательную деятельность',
  },
  {
    icon: 'Users',
    title: 'Индивидуальный подход',
    description: 'Гибкий график занятий и персональное внимание каждому ученику',
  },
  {
    icon: 'BookOpen',
    title: 'Теория и практика',
    description: 'Полный курс подготовки к экзаменам в ГИБДД',
  },
  {
    icon: 'TrendingUp',
    title: 'Высокая успешность',
    description: '95% наших выпускников сдают экзамен с первого раза',
  },
];

const programs = [
  {
    category: 'B',
    title: 'Легковые автомобили',
    duration: '3 месяца',
    price: 'от 30 000 ₽',
    color: 'from-primary to-blue-400',
  },
  {
    category: 'C',
    title: 'Грузовые автомобили',
    duration: '3.5 месяца',
    price: 'от 35 000 ₽',
    color: 'from-secondary to-orange-400',
  },
  {
    category: 'D',
    title: 'Автобусы',
    duration: '4 месяца',
    price: 'от 40 000 ₽',
    color: 'from-accent to-purple-400',
  },
];

const news = [
  {
    title: 'Новый автопарк',
    date: '15 октября 2024',
    description: 'Поступление новых учебных автомобилей Lada Vesta',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400',
  },
  {
    title: 'Успешная сдача экзаменов',
    date: '10 октября 2024',
    description: '98% наших учеников сдали экзамены в октябре',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400',
  },
  {
    title: 'День открытых дверей',
    date: '5 октября 2024',
    description: 'Приглашаем всех желающих познакомиться с нашей школой',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400',
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">
                🚗 Обучение с 1950 года
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Научим водить{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  с нуля
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональная автошкола ДОСААФ в Павлово. Современные методики обучения,
                опытные инструкторы и гарантия качества.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                  Записаться на обучение
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-4xl font-bold text-primary">70+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary">5000+</div>
                  <div className="text-sm text-muted-foreground">выпускников</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">95%</div>
                  <div className="text-sm text-muted-foreground">сдают с первого раза</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800"
                alt="Driving school"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-0">Преимущества</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы предлагаем качественное обучение вождению с учетом современных требований
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={feature.icon} className="text-white" size={28} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-0">Программы</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Категории обучения</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящую программу обучения
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-20 h-20 mx-auto bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-4`}
                  >
                    <span className="text-4xl font-bold text-white">{program.category}</span>
                  </div>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={18} />
                      <span>{program.duration}</span>
                    </div>
                    <div className="text-3xl font-bold text-primary">{program.price}</div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/training/programs">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                Все программы обучения
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-0">Новости</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Последние новости</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Будьте в курсе событий нашей автошколы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                    <Icon name="Calendar" size={16} />
                    {item.date}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                  <Button variant="link" className="px-0 mt-4">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/news">
              <Button size="lg" variant="outline">
                Все новости
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Готовы начать обучение?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Запишитесь на первое занятие и получите скидку 10% на полный курс обучения
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <Icon name="UserPlus" size={20} className="mr-2" />
              Записаться сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить нам
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
