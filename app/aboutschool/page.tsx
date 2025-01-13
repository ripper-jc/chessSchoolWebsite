import Title from "@/components/title";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import businessImage1 from "@/public/stock-photo-business.jpg";
import businessImage2 from "@/public/stock-photo-business1.jpg";
import businessImage3 from "@/public/stock-photo-business2.jpg";
import awardImage from "@/public/kak-zavershitsya-sed.jpg";
import TrainerCard from "@/components/trainerCard";
import cardImage1 from "@/public/victor.jpg";
import cardImage2 from "@/public/Kyryll.png";
import cardImage3 from "@/public/Katerynajpg.jpg";
import cardImage4 from "@/public/Rustem.jpg";
import cardImage5 from "@/public/Artem.jpg";
import cardImage6 from "@/public/Sergiy.jpg";


export default function Page() {
    return (
      <>
        <div className="container mx-auto px-4 py-12 max-w-7xl mt-32">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Дитяча онлайн-школа шахів
              <br />
              «King&Queen»
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Це місце, де вчать аналізувати ситуацію, стратегічно думати та
                приймати вірні рішення, без чого неможливо бути успішним у
                сучасному світі. Вже після 1 місяця дитина зможе розіграти
                шахову партію, а через півроку занять, буде приймати участь в
                рейтингових турнірах.
              </p>

              <div className="space-y-4">
                <h2 className="text-xl font-bold">Наші особливості</h2>
                <p className="text-lg leading-relaxed">
                  індивідуальний підхід до кожного учня, спеціальні методики
                  викладання, система мотивацій, домашні завдання та облік
                  досягнень шахіста. Заняття проходять онлайн, з любого куточка
                  світу, індивідуальний підбір групи в залежності від рівня та
                  часу занять, який Вам підходить ...
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                Ми віримо, що в кожній дитині прихован чемпіон, ми допоможемо
                розкрити його потенціал. Якщо хочете, щоб Ваша дитина встигала з
                усіх шкільних предметів, всебічно розвивалася та була успішна по
                життю, тоді запишіть вашу дитину в нашу онлайн- школу
                «King&Queen».
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative h-[400px] w-full">
                <Image
                  src={awardImage}
                  alt="Chess trophy"
                  fill
                  className="object-cover"
                />
              </div>
              <figure className="text-center">
                <blockquote className="italic text-lg">
                  &quot;Якщо перед тобою велика ціль, а можливості твої обмежені, -
                  все одно дій, бо тільки через дію можуть зрости твої
                  можливості.&quot;
                </blockquote>
                <figcaption className="mt-2 text-gray-600">
                  — Ширі Ауробіндо
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <hr className="container mx-auto my-24 border-t-2 border-gray-300" />

        <div className="container mx-auto px-4 md:px-12 lg:px-32 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side - Images */}
            <div className="relative grid grid-cols-6 grid-rows-6 gap-4">
              {/* Large image */}
              <div className="col-span-5 row-span-4">
                <Image
                  src={businessImage1}
                  alt="Chess strategy illustration"
                  width={600}
                  height={400}
                  className=" object-cover w-full h-full shadow-lg"
                />
              </div>
              {/* Medium image */}
              <div className="col-span-3 col-start-4 row-span-2 row-start-5 ">
                <Image
                  src={businessImage2}
                  alt="Chess player making a move"
                  width={300}
                  height={200}
                  className=" object-cover w-full h-full shadow-lg"
                />
              </div>
              {/* Small image */}
              <div className="col-span-3 row-span-2 row-start-5 -mt-12">
                <Image
                  src={businessImage3}
                  alt="Strategic chess move"
                  width={300}
                  height={200}
                  className=" object-cover w-full h-full shadow-lg"
                />
              </div>
            </div>

            {/* Right side - Text content */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold">Про нашу місію</h1>

              <p className="text-lg leading-relaxed">
                Життя та гра в шахи. Який же зв&apos;язок? І те, і інше передбачає
                стратегію, далекоглядність і здатність думати наперед. Так само,
                як у грі в шахи, кожен хід у житті має бути ретельно продуманий.
                Кожне рішення, ухвалене сьогодні, потенційно може вплинути на
                майбутнє, і один невірний рух може запустити ланцюжок подій, які
                можуть мати катастрофічні наслідки.
              </p>

              <p className="text-lg leading-relaxed">
                Шахи- засіб для успішного виховання дитини. Наша місія полягає в
                тому, щоб навчити дітей аналізувати ситуації та приймати вірні
                рішення, мислити стратегічно, вибираючи правильну тактику і
                успішно справлятися з усіма викликами сучасного світу.
              </p>

              <p className="text-lg leading-relaxed">
                А щоб розкрити та реалізувати потенціал дитини, дотримуйтесь
                наших рекомендацій. І незабаром ви переконаєтесь – результати не
                забаряться!
              </p>
            </div>
          </div>
        </div>
        <hr className="container mx-auto my-24 border-t-2 border-gray-300" />
        <div className="container mx-auto my-32 px-4 sm:px-6 lg:px-36  text-center">
          <Title
            title="Ядром нашої команди виступають тренери"
            subtitle="Вони допомагають учням прискорити процес розвитку розумових здібностей, фантазії, пам'яті, сформувати сильні риси особистості, такі як воля до перемоги, рішучість, витривалість, витримка, терпіння, самовладання та багато іншого. Вони вкладають всю душу, знання та любов у своїх учнів і прагнуть привести їх до успіху!"
          />
        </div>
        <div className="w-full bg-white">
          <div className="sm:p-4 md:p-12 lg:p-32 flex flex-col items-center justify-center">
            <Title
              title="Замовте безкоштовне заняття!"
              subtitle={
                <>
                  Ви можете вибрати зручний час і скористатися пробним заняттям,
                  щоб <br />
                  краще познайомитися з нашою онлайн-школою, заповнивши анкету
                </>
              }
            />
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TrainerCard
                  image={cardImage1}
                  name="Віктор Дмитренко"
                  title="Тренер-викладач з шахів"
                  qualifications={[
                    "Майстер спорту України з шахів",
                    "Міжнародний Майстер (ІМ) з шахів",
                  ]}
                  experience="17 р. для дітей та дорослих"
                  education="Слов&apos;янський державний педагогічний університет, спеціальність «Педагогіка та методика середньої освіти. Фізична культура»"
                  description="Надійний наставник. Знаходжу індивідуальний підхід до кожного шахіста, розкриваючи та розвиваючи його потенціал."
                  detailsLink="/trainers/viktor-dmytrenko"
                />
                <TrainerCard
                  image={cardImage2}
                  name="Кирило Малахов"
                  title="Тренер-викладач з шахів"
                  qualifications={[
                    "Майстер спорту України з шахів",
                  ]}
                  experience="15 років для дітей та дорослих. Нагорода &quot;Кращий дитячий тренер м. Дніпра 2021/2022 рр.&quot; від ФШД"
                  education="Вища економічна."
                  description="Я треную, щоб зробити дітей розумними. Вважаю, що передавати учням необхідно знання та здатність їх застосування"
                  detailsLink="/trainers/viktor-dmytrenko"
                />
                <TrainerCard
                  image={cardImage3}
                  name="Віктор Дмитренко"
                  title="Тренер-викладач з шахів"
                  qualifications={[
                    "Майстер спорту України з шахів",
                    "Міжнародний Майстер (ІМ) з шахів",
                  ]}
                  experience="17 р. для дітей та дорослих"
                  education="Слов&apos;янський державний педагогічний університет, спеціальність «Педагогіка та методика середньої освіти. Фізична культура»"
                  description="Надійний наставник. Знаходжу індивідуальний підхід до кожного шахіста, розкриваючи та розвиваючи його потенціал."
                  detailsLink="/trainers/viktor-dmytrenko"
                />
                <TrainerCard
                  image={cardImage4}
                  name="Віктор Дмитренко"
                  title="Тренер-викладач з шахів"
                  qualifications={[
                    "Майстер спорту України з шахів",
                    "Міжнародний Майстер (ІМ) з шахів",
                  ]}
                  experience="17 р. для дітей та дорослих"
                  education="Слов&apos;янський державний педагогічний університет, спеціальність «Педагогіка та методика середньої освіти. Фізична культура»"
                  description="Надійний наставник. Знаходжу індивідуальний підхід до кожного шахіста, розкриваючи та розвиваючи його потенціал."
                  detailsLink="/trainers/viktor-dmytrenko"
                />
                <TrainerCard
                  image={cardImage5}
                  name="Віктор Дмитренко"
                  title="Тренер-викладач з шахів"
                  qualifications={[
                    "Майстер спорту України з шахів",
                    "Міжнародний Майстер (ІМ) з шахів",
                  ]}
                  experience="17 р. для дітей та дорослих"
                  education="Слов&apos;янський державний педагогічний університет, спеціальність «Педагогіка та методика середньої освіти. Фізична культура»"
                  description="Надійний наставник. Знаходжу індивідуальний підхід до кожного шахіста, розкриваючи та розвиваючи його потенціал."
                  detailsLink="/trainers/viktor-dmytrenko"
                />
                <TrainerCard
                  image={cardImage6}
                  name="Віктор Дмитренко"
                  title="Тренер-викладач з шахів"
                  qualifications={[
                    "Майстер спорту України з шахів",
                    "Міжнародний Майстер (ІМ) з шахів",
                  ]}
                  experience="17 р. для дітей та дорослих"
                  education="Слов&apos;янський державний педагогічний університет, спеціальність «Педагогіка та методика середньої освіти. Фізична культура»"
                  description="Надійний наставник. Знаходжу індивідуальний підхід до кожного шахіста, розкриваючи та розвиваючи його потенціал."
                  detailsLink="/trainers/viktor-dmytrenko"
                />
                {/* Add more TrainerCard components as needed */}
              </div>
            </div>
            <a href="https://forms.gle/uXhGv9GAiwkyjfBt7">
              <Button className="bg-amber-400 text-black hover:bg-amber-500 text-xl lg:mt-7 rounded-lg px-12 py-6 mb-10">
                Перейти до анкети
              </Button>
            </a>
          </div>
        </div>
      </>
    );
}