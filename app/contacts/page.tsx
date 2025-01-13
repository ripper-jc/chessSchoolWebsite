import Title from "@/components/title";
import Image from "next/image";
import Contact from "@/public/contacts.jpg";
import { Button } from "@/components/ui/button";

export default function Contacts() {
    return (
      <>
        <div className="container mx-auto min-h-[100dvh] my-24 px-4 sm:px-6  text-center flex flex-col justify-center items-center">
          <Title
            title="Відточуйте свою майстерність з нами"
            subtitle="Подайте заявку на безкоштовне заняття "
          />
          <div className="container mx-auto my-24 px-4 sm:px-6 lg:px-48 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="">
              <Image src={Contact} alt="" />
              <p className="p-4">
                Якщо Ви не знайшли потрібної послуги, ми завжди готові
                обговорити, чим можемо допомогти Вам!
              </p>
            </div>
            <div>
              <div>
                <form className="w-full max-w-lg p-8 ">
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
                      id="name"
                      type="text"
                      placeholder="Ваше ім'я"
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
                  <div className="mb-4">
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="comment"
                      placeholder="Ваш коментар"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-amber-300 hover:bg-amber-400 text-gray-900 font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Залиште заявку
                    </button>
                  </div>
                  <p className="text-sm text-gray-300 p-5">
                    You agree to our Terms and Conditions
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    ); 
}