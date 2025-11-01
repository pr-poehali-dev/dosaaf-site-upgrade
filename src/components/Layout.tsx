import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navigation = [
  { name: 'Главная', path: '/' },
  {
    name: 'Сведения об организации',
    path: '/info',
    children: [
      { name: 'Основные сведения', path: '/info/basic' },
      { name: 'Структура и органы управления', path: '/info/structure' },
      { name: 'Документы', path: '/info/documents' },
      { name: 'Образование', path: '/info/education' },
      { name: 'Руководство', path: '/info/management' },
      { name: 'Педагогический состав', path: '/info/staff' },
      { name: 'Материально-техническое обеспечение', path: '/info/facilities' },
      { name: 'Доступная среда', path: '/info/accessibility' },
      { name: 'Платные образовательные услуги', path: '/info/paid-services' },
      { name: 'Финансово-хозяйственная деятельность', path: '/info/finance' },
      { name: 'Вакантные места', path: '/info/vacancies' },
      { name: 'Стипендии и меры поддержки', path: '/info/scholarships' },
      { name: 'Международное сотрудничество', path: '/info/international' },
      { name: 'Организация питания', path: '/info/catering' },
    ],
  },
  {
    name: 'Обучение',
    path: '/training',
    children: [
      { name: 'Программы', path: '/training/programs' },
      { name: 'Стоимость обучения', path: '/training/pricing' },
    ],
  },
  { name: 'Новости', path: '/news' },
  { name: 'Акции', path: '/promotions' },
  { name: 'Контакты', path: '/contacts' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center transform transition-transform group-hover:scale-110">
                <Icon name="Car" className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">ДОСААФ</h1>
                <p className="text-xs text-muted-foreground">Автошкола Павлово</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              {navigation.map((item) =>
                item.children ? (
                  <div
                    key={item.path}
                    className="relative group"
                    onMouseEnter={() => setOpenMenu(item.path)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <button className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-1">
                      {item.name}
                      <Icon name="ChevronDown" size={16} />
                    </button>
                    {openMenu === item.path && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border animate-fade-in">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-3 text-sm text-foreground/80 hover:bg-primary/5 hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-primary'
                        : 'text-foreground/80 hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                Записаться
              </Button>
            </div>

            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-4 mt-8">
                  {navigation.map((item) => (
                    <div key={item.path}>
                      {item.children ? (
                        <div>
                          <button
                            onClick={() => setOpenMenu(openMenu === item.path ? null : item.path)}
                            className="w-full text-left font-medium flex items-center justify-between py-2"
                          >
                            {item.name}
                            <Icon
                              name="ChevronDown"
                              size={16}
                              className={`transition-transform ${openMenu === item.path ? 'rotate-180' : ''}`}
                            />
                          </button>
                          {openMenu === item.path && (
                            <div className="pl-4 flex flex-col gap-2 mt-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  className="text-sm text-foreground/80 hover:text-primary py-1"
                                  onClick={() => setOpenMenu(null)}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          className="block font-medium py-2 hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  <Button className="mt-4 bg-gradient-to-r from-primary to-secondary">
                    Записаться
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Car" className="text-white" size={22} />
                </div>
                <div>
                  <h3 className="font-bold">ДОСААФ</h3>
                  <p className="text-xs text-white/60">Автошкола Павлово</p>
                </div>
              </div>
              <p className="text-sm text-white/70">
                Профессиональное обучение вождению с 1950 года
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Обучение</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link to="/training/programs" className="hover:text-primary transition-colors">
                    Программы обучения
                  </Link>
                </li>
                <li>
                  <Link to="/training/pricing" className="hover:text-primary transition-colors">
                    Стоимость
                  </Link>
                </li>
                <li>
                  <Link to="/info/staff" className="hover:text-primary transition-colors">
                    Преподаватели
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link to="/info/basic" className="hover:text-primary transition-colors">
                    О школе
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="hover:text-primary transition-colors">
                    Новости
                  </Link>
                </li>
                <li>
                  <Link to="/promotions" className="hover:text-primary transition-colors">
                    Акции
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-1 text-primary" />
                  <span>г. Павлово, ул. Ленина, 123</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-primary" />
                  <a href="tel:+78001234567" className="hover:text-primary transition-colors">
                    +7 (800) 123-45-67
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-primary" />
                  <a href="mailto:info@pavlovo-dosaaf.ru" className="hover:text-primary transition-colors">
                    info@pavlovo-dosaaf.ru
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
            <p>© 2025 ДОСААФ Автошкола Павлово. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
