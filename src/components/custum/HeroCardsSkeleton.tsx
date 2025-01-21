export default function HeroCardsSkeleton() {
  return (
    <div className="pt-6">
      <main className="px-4 flex gap-8 mx-auto justify-center">
        {/* Skeleton for First Card */}
        <div className="md:max-w-[640px] max-w-[500px] max-h-[400px] rounded-[10px] animate-pulse">
          <div className="bg-gray-300 p-8 rounded-lg text-white flex flex-col items-center lg:justify-between relative overflow-hidden max-w-3xl mx-auto">
            <div>
              <div className="h-8 bg-gray-400 w-[272px] rounded-md"></div>
              <div className="mt-3 h-4 bg-gray-400 w-full rounded-md"></div>
              <div className="mt-2 h-10 bg-gray-400 w-24 rounded-sm"></div>
            </div>
            <div className="flex-1 mt-8 lg:mt-0">
              <div className="w-full h-24 bg-gray-400 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Skeleton for Second Card */}
        <div className="md:flex md:max-w-[640px] max-w-[500px] max-h-[400px] rounded-[10px] animate-pulse">
          <div className="bg-gray-300 p-8 rounded-lg text-white flex flex-col items-center lg:justify-between relative overflow-hidden max-w-3xl mx-auto">
            <div>
              <div className="h-8 bg-gray-400 w-[272px] rounded-md"></div>
              <div className="mt-3 h-4 bg-gray-400 w-full rounded-md"></div>
              <div className="mt-2 h-10 bg-gray-400 w-24 rounded-sm"></div>
            </div>
            <div className="flex-1 mt-8 lg:mt-0">
              <div className="w-full h-24 bg-gray-400 rounded-lg"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
