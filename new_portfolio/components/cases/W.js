export const WCase = {
  title: "W Hotel",
  description: "Art Director at SJ's onboard magazine Kupé",
  introtext: (
    <div>
      <h2 className="untitled-text mb-6 mt-2 text-md text-center">W Hotel</h2>
      <p className="untitled-text mb-4 text-md ">
        As a Designer and Frontend Developer at Digital Product Studio
        Department I was part of designing an interface for a mood based
        playlist picker and an in-room music experience for W Hotels. I did the
        UI design and came up with the idea that the player should feel organic
        and fluid – like an emotion – when you move your finger over the iPad.
        Like a lava lamp or liquid light show, that changes color depending on
        what mood the guest chooses. Then my colleague Fredrik built an
        absolutely fantastic solution.
      </p>
    </div>
  ),
  heroimageWork: "w-hero.png",
  heroimageCase: "kupe-test.png",
  overviewSize: "large",
  images: (
    <div className="grid grid-cols-2 gap-10 ">
      <div className="col-span-2 ... ">
        <img
          src="/images/cases/w/w-hero.png"
          className=" object-cover w-full"
        />
      </div>

      <div className="col-span-2 ...">
        <div className="...  h-auto">
          <img src="/images/cases/w/w2.png" className="object-contain w-full" />
        </div>
      </div>

      <div className="col-span-2  ...">
        <img src="/images/cases/w/w3.png" className="object-contain w-full" />
      </div>

      <div className="w-full h-40 md:h-60 " />
    </div>
  ),
};
