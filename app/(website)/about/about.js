import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (

    <Container>

      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        About
      </h1>
      <div className="w-full">
          <Image
          src="/img/anglo-orthodox.jpg"
          alt="mushroom"
          width="1980"
          height="1200"
        />
        </div>  
      <div className="text-center">
        <br></br>
        <p className="text-lg">The light of the East at home in the West.</p>
      </div>

      <div className="mx-auto prose text-left dark:prose-invert mt-14">
         <p>
            Anglo-Orthodox, or Anglo-Orthodoxy, shares a spiritual history with the Anglo-Catholic tradition. The Anglo-Catholic tradition traces its roots back to the 18th Century Oxford Movement and the Tractarians who argued that Anglicanism was truly a part of the Catholic tradition of the Christian Church and carried the flame of Apostolic Succession. Anglo-Catholoism brought a return to elements of the liturgy that were lost in the BCP, prioritized weekly communion, returned altar candles, brought back incense, just to name a few contributions.
          </p>
          <p>
            Those of us who identify as Anglo-Orthodox have an affinity for early Christian practicies and the expressions of worship held in the Christian East. We have icons, use icons to pray, prioritize confession, cross ourselves more freqenctly, omit the Filioque from the Creed, pray the Jesus Prayer with prayer ropes, just to name a few practices we incorporate into our daily lives. 
          </p>
          <p>            
            We see the Anglican Tradition as a beautiful tradition that offers space <i>via media</i> , allowing those of us who are drawn to and feel comfortable with expressions of worship typically associated with the East. 
          </p>
          <font size="+1">So why "Anglo-Orthodox"?</font> 
          <p>There are many, many treasures from the Christian East that are not well known here in the West. Anglo-Orthodoxy looks so bring that light and share it here within our Anglican Tradition, much as Archbishop Rowan Williams did with his book <a href="https://www.amazon.com/Looking-East-Winter-Contemporary-Christian/dp/1472989244">Looking East in Winter: Contemporary Thought and the Eastern Christian Tradition</a> - though, admittedly not on par with the work of the Archbishop.  We hope you will enjoy insights from the writings of the East, explorations of practices, and thoughts on an Eastern worldview.</p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
