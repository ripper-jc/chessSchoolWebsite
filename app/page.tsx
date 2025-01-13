import Image from "next/image";
import Banner from "@/components/banner";
import TextBlock from "@/components/mainPage/textBlock";
import Image1 from "@/public/stock-photo-chess-pi.webp";
import Image2 from "@/public/banner5-scaled-e1651.webp";
import Image3 from "@/public/6I2S8EALYAI2uZTDiNBX.webp";
import Image4 from "@/public/stock-photo-chess-bo.webp";
import Title from "@/components/title";
import ImageBlock from "@/components/mainPage/ImageBlock";
import ReusableAccordion from "@/components/reusableAccordion";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessKing,
  faChessBishop,
  faChessQueen,
  faChessKnight,
} from "@fortawesome/free-solid-svg-icons";
import ChessAdvantages from "@/components/chessAdvantages";
import BoyPhoto from "@/public/stock-photo-boy-usin.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Step from "@/components/step";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Banner2 from "@/public/stock-photo-chess-ga.jpg";
import CommentItem from "@/components/commentItem";
import client1 from "@/public/client1.jpeg";
import client2 from "@/public/client2.jpeg";
import client3 from "@/public/client3.jpeg";
import client4 from "@/public/client4.jpg";
import banner3 from "@/public/banner3.jpg";


const chessContent = [
  {
    type: "text",
    title: "Навички комунікації",
    text: "Розвиваються вербальні навички. З'являються нові можливості повноцінного самовираження та, що вкрай важливо, самореалізації, підвищується самооцінка. Ще шахи здатні знижувати рівень підліткової агресивності, трансформуючи її у здоровий дух змагань.",
    order: "order-1 xl:order-1",
  },
  {
    type: "image",
    src: Image1,
    alt: "Chess pieces on a board",
    order: "order-2 xl:order-2",
  },
  {
    type: "text",
    title: "Нестандартне мислення",
    text: 'Шахи- це гра, в основі якої лежить складна багаторівнева логіка та оригінальний ігровий світ. Підготовка пасток і контрударів для суперника, приховування власних планів... , виступають відмінним тренажером "думай-не-як-всі", що дає чудовий поштовх для розвитку творчих здібностей у дитини.',
    order: "order-4 xl:order-3",
  },
  {
    type: "image",
    src: Image2,
    alt: "Chess strategy display",
    order: "order-3 xl:order-4",
  },
  {
    type: "image",
    src: Image3,
    alt: "Chess players in action",
    order: "order-6 xl:order-5",
  },
  {
    type: "text",
    title: "Інтелектуальні навички",
    text: "Під час партії задіяні обидві півкулі людського мозку і одночасно використовується логічне та абстрактне мислення. Діти вчяться аналізувати ситуації та робити висновки. Також гра в шахи сприяє швидкому розвитку пам'яті та системному мисленню, тренуючи кмітливість ... .",
    order: "order-5 xl:order-6",
  },
  {
    type: "image",
    src: Image4,
    alt: "Chess board setup",
    order: "order-7 xl:order-7",
  },
  {
    type: "text",
    title: "Гнучкі навички",
    text: "Тренування формують у гравців вміння досягати поставленої мети, долаючи опір суперника, розвиваючи самоконтроль, рішучість, дисциплінованість. Шахи розвивають вміння знаходити найбільш короткі шляхи досягнення бажаного, не витрачаючи час на відволікаючі нюанси гри, розвиваючи у шахіста емоційний інтелект.",
    order: "order-8 xl:order-8",
  },
];

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container mx-auto my-24 px-4 sm:px-6 lg:px-48 text-center">
        <Title
          title="Чому варто грати шахи, та яка користь?"
          subtitle={
            <>
              Шахи - це неперевершений тренажер для людського <br />
              інтелекту, при грі розвиваються такі навички:
            </>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 bg-white shadow-lg">
          {chessContent.map((content, index) =>
            content.type === "text" ? (
              <TextBlock
                key={index}
                title={content.title || ""}
                text={content.text || ""}
                className={content.order}
              />
            ) : (
              <ImageBlock
                key={index}
                src={content.src || Image1}
                alt={content.alt || "Default alt text"}
                order={content.order}
              />
            )
          )}
        </div>
      </div>
      <hr className="container mx-auto my-24 border-t-2 border-gray-300" />
      <div className="container mx-auto my-24 px-4 sm:px-6 lg:px-48 text-center">
        <Title
          title="Які саме переваги онлайн-навчання з нами?"
          subtitle={
            <>
              Ми віримо, що в кожній дитині прихован чемпіон <br />
              ми допоможемо розкрити його потенціал.
            </>
          }
        />
        <ChessAdvantages
          title="Безкоштовне перше заняття"
          text={
            <>
              Дитина зрозуміє чи цікаві йому шахи. <br />
              Експрес-діагностика шахового рівня. <br />
              Рекомендації щодо напрямів удосконалення шахіста. Відповіді на
              запитання.
            </>
          }
          chessFigure={<FontAwesomeIcon icon={faChessKing} className="fa-3x" />}
        />
        <ChessAdvantages
          title="Онлайн -заняття"
          text={
            <>
              Мобільність-достатньо підключення до швидкісного Інтернету та
              комп’ютера, ноутбука, чи смартфона.
              <br />
              Економія часу- вдома потрібно, просто, відкрити ноутбук і зручно
              вмоститись в кріслі.
              <br />
              Під час online-навчання значно легше контролювати навчальний
              процес, а тому значно важче «халявити».
              <br />
              Навчання проходить на спеціальній платформі, де Ви зможете
              відстежувати прогрес.
              <br />
              Заняття триває 60 хв. , складається з теоретичної та практичної
              частини
              <br />
              Проводимо турніри кожної неділі між групами нашої школи.
            </>
          }
          chessFigure={
            <FontAwesomeIcon icon={faChessQueen} className="fa-3x" />
          }
        />
        <ChessAdvantages
          title="Міні групи"
          text={
            <>
              Проводим набір дітей з 6-17 років, формуються групи в залежності
              від рівня знать та віку учнів . <br />
              Кількість дітей в групі від 6-10 дітей.
              <br />
              Для ефективного засвоєння матеріалу, на практичній частині
              заняття, діти розподіляються по парам для гри в партію.
            </>
          }
          chessFigure={
            <FontAwesomeIcon icon={faChessKnight} className="fa-3x" />
          }
        />
        <ChessAdvantages
          title="Індивідуальний підхід"
          text={
            <>
              Наша компанія працює за принципом індивідуального підходу до
              кожного клієнта. <br />
              Розроблена спеціальна методика навчання. Цей метод дозволяє
              досягти успіху в задачах на усіх рівнях. <br />
              Наші менеджери завжди готові відповісти на ваші запитання,
              підібрати зручний для вас час занять.
            </>
          }
          chessFigure={
            <FontAwesomeIcon icon={faChessBishop} className="fa-3x" />
          }
        />
      </div>
      <div className="w-full py-12 bg-stone-200">
        <div className="container mx-auto my-24 px-4 sm:px-6 lg:px-48 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="">
            <Image src={BoyPhoto} alt="" />
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-4 text-start">
              <strong>Як проходить навчання?</strong>
            </h3>
            <div>
              <p>
                <strong>Теоретична частина:</strong>
              </p>
              <p>✔ Перевірка домашньої роботи;</p>
              <p>
                ✔ Розминка: тренер задає шахістам тактичні та комбінаційні
                завдання;
              </p>
              <p>
                ✔ Пояснення нової теми заняття, вивчення комбінацій і тактик.
              </p>
              <p>
                <strong>
                  <em>Практична частина:</em>
                </strong>
              </p>
              <p>✔ Шахіст грає з тренером або іншими учнем;</p>
              <p>
                ✔ Тренер , виступає як ментор, виявляє помилки, налаштовує на те
                , щоб дитина обмірковувала, аналізувала свої ходи та суперника
                ...{" "}
              </p>
              <Link href="/about">
                <Button
                  className="bg-amber-300 text-gray-900 hover:bg-amber-400 px-6 text-lg py-6 mt-4 rounded-lg"
                  variant={"secondary"}
                >
                  Детальніше про заняття
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-24 px-4 sm:px-6 lg:px-48 text-center">
        <Title title="Почати тренування просто" subtitle={""} />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-5">
          <Step
            title="Заповнення анкети"
            text="Для першочергового визначення рівня знать шахіста та час занять, який йому краще підходить"
            stepNumber="1"
          />
          <Step
            title="Перше заняття безкоштовне"
            text="Визначаємо день та час заняття , яке пройде абсолютно безкоштовно :0)"
            stepNumber="2"
          />
          <Step
            title="Вибір курсу"
            text="Остаточний вибір курсу , який краще підходить шахісту до його рівня"
            stepNumber="3"
          />
          <Step
            title="Оплата послуг"
            text="Ви знаєте, за що ви платите. У нас фіксовані ціни на всі послуги."
            stepNumber="4"
          />
        </div>
        <div className="flex justify-center mt-10">
          <Button
            className="bg-amber-300 text-gray-900 hover:bg-amber-400 px-14 text-xl py-6 rounded-lg"
            variant={"secondary"}
          >
            Заповнити анкету
          </Button>
        </div>
      </div>

      <div className="relative h-[100dvh]">
        <Image src={Banner2} alt="Banner" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 overflow-hidden">
          
        </div>
        <div className="relative w-full h-full max-w-4xl mx-auto px-4 py-12 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">Що говорять про нас наші клієнти?</h2>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <CommentItem
                  imgSrc={client1.src}
                  text="Досить довго шукала таку онлайн-школу шахів для своєї дочки . Дуже сподобалась структура занять, вважаю, що вона ефективна. King&Queen - це команда професіоналів, відповідальних людей. "
                  name="Марина"
                  nameMore="Мама Яни, 13 р"
                />
              </CarouselItem>
              <CarouselItem>
                <CommentItem
                  imgSrc={client2.src}
                  text='Я по-справжньому відкрив для себе шахи зі школою "King&Queen". Кожен урок відкривається для мене по-новому і чогось навчає. Навички, які я отримую при навчанні та грі у шахи, легко переносяться у життя. Обдумування кожного ходу, терпіння та справжня радість успіху, якого ти досягаєш не за рахунок удачі, а за рахунок стратегії і тактики - ось, що таке шахи для мене'
                  name="Данило"
                  nameMore="Шахіст, 16 р"
                />
              </CarouselItem>
              <CarouselItem>
                <CommentItem
                  imgSrc={client3.src}
                  text="Ми займаємось лише місяць. Два непосидючі хлопчики 8-и років. Вчитель дуже терплячий і послідовний.  "
                  name="Софія"
                  nameMore="Мама Олега 8 р. та Ярослава 8 р."
                />
              </CarouselItem>
              <CarouselItem>
                <CommentItem
                  imgSrc={client4.src}
                  text="Дякую за таку можливість дистанційно займатися шахами, у Оксани з’явилися нові друзі, навчання в вашій школі проходить задоволенням, дякую тренеру та куратору! "
                  name="Тетяна"
                  nameMore="Мама Оксани 7 р."
                />
              </CarouselItem>


            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div className="container mx-auto my-24 px-4 sm:px-6 lg:px-48 text-center">
        <Title title="Підбірка питань, які часто задають" subtitle={""} />
        <div className="text-start xl:px-52">
          <ReusableAccordion
            title="З якого віку приймають дітей до шахової школи та яка кількість шахістів ?"
            text={
              <>
                Проводим набір дітей до нашої онлайн-школи шахів від 6-17 років.
                <br />
                Кількість дітей залежить від курсу, в основному від 6-10
                шахістів в групі.
                <br />
                На індивідувідуальні заняття записуємо з 5 рочків.
              </>
            }
          />
          <ReusableAccordion
            title="Чи є розподіл в залежності від рівня знань шахової гри, при формуванні групи?"
            text={
              <>
                Так, набір в групи проводиться в залежності від рівня.
                Визначаємо рівень знань дитини в 2 етапи: спочатку за допомогою
                анкети, яку Ви заповняєте перед заняттями, а вже остаточне
                визначення робить тренер, на безкоштовному занятті.
              </>
            }
          />
          <ReusableAccordion
            title="Скільки триває одне заняття?"
            text={
              <>
                Заняття триває 60 хв., 40-45 хв. на теоретичну частину
                відводиться та на практичну частину 10
              </>
            }
          />
          <ReusableAccordion
            title="Яке програмне забезпечення використовуєте для занять?"
            text={
              <>
                Ми використовуємо :<br />
                <ul className="list-disc list-inside">
                  <li className="p-2">
                    програму Zoom або Google meet для організації
                    відеоконференцій, що дозволяє нам забезпечувати високу
                    якість навчання та зберігати інтерактивний формат занять
                  </li>
                  <li className="p-2">
                    використовуємо різний шаховий інтернет-сервер, за допомогою,
                    яких проводиться навчання, турніри, де є можливість
                    проаналізувати всі свої партії, бачити прогрес, тобто надає
                    широкі можливості щодо вдосконалення тактичної складової
                    гри.
                  </li>
                </ul>
              </>
            }
          />
          <ReusableAccordion
            title="Моя дитина хоче займатися у певного тренера-викладача. Як йому записатися до цього тренера-викладача?"
            text={
              <>
                Якщо даний тренер-викладач проводить набір до групи, то дитина
                абсолютно точно буде зарахована до неї. Якщо ж тренер не
                проводить набір до групи і не має вакантних місць для
                дозарахування, нажаль Ваша дитина не зможе бути зарахована до
                цього тренера.
              </>
            }
          />
          <ReusableAccordion
            title="Якщо пропустили заняття, що робити?"
            text={
              <>
                Не хвилюйтесь, в нас на такі випадки є рішення:
                <br />
                <ul className="list-disc list-inside">
                  <li className="p-2">
                    Тренер-викладач робить запис заняття теоретичної частини та
                    фіксуємо силку на нього в персональному кабінеті дитини .
                    Дитина передивляється урок, на завданнях запис заняття ставе
                    на паузу , вирішивши , продовжує далі,- таким чином
                    опрацьовує нову тему, засвоює прийоми при вирішенні завдань
                    та не відстає від групи ;
                  </li>
                  <li className="p-2">
                    Заняття завжди починаємо з повторення матеріалу, пройденого
                    на минулому занятті. Це дає змогу дітям пригадати, закріпити
                    тему та закрити питання по темі, якщо виникають при
                    виконанні домашнього завдання.
                  </li>
                </ul>
              </>
            }
          />
        </div>
      </div>


      <div className="relative h-[100dvh]">
        <Image src={banner3} alt="Banner" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 overflow-hidden">
          
        </div>
        <div className="relative w-full h-full max-w-4xl mx-auto px-4 py-12 flex flex-col justify-center items-center text-white text-center">
          <Title title="Запишіться на безкоштовне заняття до одного з наших викладачів" subtitle={"Це можливість зустрітися з групою, подивитись , як проходить заняття та отримати консультацію"} />
          <form className="w-full max-w-lg p-8 ">
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Ваше ім'я"
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Ваш email"
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                placeholder="Ваш телефон"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-amber-300 hover:bg-amber-400 text-gray-900 font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                type="button"
              >
                Записатися
              </button>
            </div>
            <p className="text-sm text-gray-300 p-5">You agree to our Terms and Conditions</p>
          </form>
        </div>
      </div>


    </>
  );
}
