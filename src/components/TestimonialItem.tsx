export const TestimonialItem = () => {
  return (
    <div className="bg-gray-100 p-8 shadow rounded-xl overflow-hidden md:flex md:p-0">
      <img className="w-32 h-32 rounded-full mx-auto md:rounded-none md:w-48 md:h-auto" src="/yuri.jpg" alt="yuri" />
      <div className="pt-6 text-center space-y-4 md:text-left md:p-8">
        <div className="text-lg font-semibold">
          "A área de desenvolvimento mudou a minha vida,
          pois eu trabalho todos os dias de casa e posso
          esta junto a minha família."
        </div>
        <div className="font-medium">
          <div className="text-blue-600 font-bold">Yuri Dantas</div>
          <div className="text-gray-500">Desenvolvedor Frontend</div>
        </div>
      </div>
    </div>
  )
}
