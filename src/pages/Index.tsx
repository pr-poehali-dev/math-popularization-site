import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Calculator" size={24} className="text-blue-600" />
              <span className="text-xl font-semibold text-slate-900">
                СВАЛКА
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#about"
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                О себе
              </a>
              <a
                href="#services"
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#materials"
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Материалы
              </a>
              <a
                href="#portfolio"
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Портфолио
              </a>
              <a
                href="#contact"
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Связь
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">Связаться</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 tracking-tight">
              Популяризация математики через практику
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Превращаю сложные математические концепции в понятные и
              увлекательные материалы. Помогаю вам освоить математику на новом
              уровне.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-slate-100"
              >
                Посмотреть материалы
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Заказать консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">О себе</h2>
              <p className="text-lg text-slate-600 mb-6">
                Воспитанник Института Математики и Механики имени Н. И.
                Лобачевского, Казанского Федерального Университета. Создаю
                образовательный контент для широкой аудитории - от школьников до
                специалистов.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon
                    name="GraduationCap"
                    size={20}
                    className="text-blue-600"
                  />
                  <span className="text-slate-700">МехМат, КФУ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={20} className="text-blue-600" />
                  <span className="text-slate-700">Более 1000 обучающихся</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="BookOpen" size={20} className="text-blue-600" />
                  <span className="text-slate-700">
                    Масса образовательных материалов
                  </span>
                </div>
              </div>
            </div>
            <div className="h-96 rounded-lg overflow-hidden">
              <img
                src="https://cdn.poehali.dev/files/2a13356a-ede9-423a-b7e1-04f2b2059b9b.jpg"
                alt="Популяризатор математики"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Услуги</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Профессиональные услуги по популяризации и преподаванию математики
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="PresentationChart"
                  size={32}
                  className="text-blue-600 mb-4"
                />
                <CardTitle>Консультации</CardTitle>
                <CardDescription>
                  Индивидуальные консультации по математическим вопросам
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Решение сложных задач</li>
                  <li>• Подготовка к экзаменам</li>
                  <li>• Методические рекомендации</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Video" size={32} className="text-blue-600 mb-4" />
                <CardTitle>Видеоуроки</CardTitle>
                <CardDescription>
                  Создание образовательных видеоматериалов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Лекции по темам</li>
                  <li>• Разборы задач</li>
                  <li>• Интерактивные уроки</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="FileText"
                  size={32}
                  className="text-blue-600 mb-4"
                />
                <CardTitle>Материалы</CardTitle>
                <CardDescription>
                  Разработка учебных и методических материалов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Учебные пособия</li>
                  <li>• Задачники</li>
                  <li>• Методические указания</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Популярные материалы
            </h2>
            <p className="text-lg text-slate-600">
              Избранные работы и публикации
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Основы математического анализа",
                type: "Учебное пособие",
                category: "analysis",
              },
              {
                title: "Линейная алгебра в примерах",
                type: "Задачник",
                category: "algebra",
              },
              {
                title: "Теория вероятностей для начинающих",
                type: "Видеокурс",
                category: "probability",
              },
              {
                title: "Дискретная математика",
                type: "Лекции",
                category: "discrete",
              },
              {
                title: "Математическая статистика",
                type: "Практикум",
                category: "statistics",
              },
              {
                title: "Комплексный анализ",
                type: "Монография",
                category: "complex",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-slate-200 hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-700"
                    >
                      {item.type}
                    </Badge>
                    <Icon
                      name="ExternalLink"
                      size={16}
                      className="text-slate-400"
                    />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">
                    Понятное изложение основ предмета с прикладными задачами и
                    примерами из жизни.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Портфолио
            </h2>
            <p className="text-lg text-slate-600">
              Видеоролики и интерактивные материалы
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Play" size={20} className="text-blue-600" />
                  Популярные видео
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Что такое производная? Интуитивное объяснение",
                  "Матрицы в реальной жизни: 5 примеров",
                  "Теорема Пифагора: 10 способов доказательства",
                ].map((title, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50"
                  >
                    <div className="w-12 h-8 bg-slate-200 rounded flex items-center justify-center">
                      <Icon name="Play" size={12} className="text-slate-500" />
                    </div>
                    <span className="text-slate-700 flex-1">{title}</span>
                    <Icon
                      name="ExternalLink"
                      size={16}
                      className="text-slate-400"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart3" size={20} className="text-blue-600" />
                  Интерактивные материалы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Калькулятор производных с пояснениями",
                  "Визуализация функций и графиков",
                  "Генератор задач по алгебре",
                ].map((title, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50"
                  >
                    <div className="w-12 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <Icon
                        name="MousePointer"
                        size={12}
                        className="text-blue-600"
                      />
                    </div>
                    <span className="text-slate-700 flex-1">{title}</span>
                    <Icon
                      name="ExternalLink"
                      size={16}
                      className="text-slate-400"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Связь</h2>
            <p className="text-xl text-slate-300">
              Готов обсудить ваши проекты и вопросы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <Icon name="Mail" size={32} className="text-blue-400 mx-auto" />
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-slate-300">gummygenoff@mail.ru</p>
            </div>
            <div className="space-y-4">
              <Icon name="Phone" size={32} className="text-blue-400 mx-auto" />
              <h3 className="text-lg font-semibold">Телефон</h3>
              <p className="text-slate-300">Да я пошутил</p>
            </div>
            <div className="space-y-4">
              <Icon
                name="MessageCircle"
                size={32}
                className="text-blue-400 mx-auto"
              />
              <h3 className="text-lg font-semibold">Telegram</h3>
              <p className="text-slate-300">@svalka_math</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Написать сообщение
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>© 2024 СВАЛКА. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
