import { check } from "../assets";
import { collabContent } from "../constants";
import Section from "./Section";

const Collaboration = () => {
  return (
    <Section crosses>
        <div className="container lg:flex">
            <div className="max-w-[25rem]">
                <h2>AI Chat App for seamless Collaboration</h2>

                <ul className="max-w-[25rem] mb:10 md:mb-14">
                {collabContent.map((item) => {
                    return (
                        <li className="mb-3 py-3" key={item.id}>
                            <div className="flex items-center">
                                <img src={check} width={24} height={24} alt="check" />
                                <h6 className="body-2 ml-5">{item.title}</h6>
                                {item.text && <p className="body-2 mt-3 text-n-4">{item.text}</p>}
                            </div>
                        </li>
                    );
                })}
                </ul>
            </div>
        </div>
    </Section>
  )
}

export default Collaboration;