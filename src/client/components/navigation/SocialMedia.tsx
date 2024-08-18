import { SocialMediaData } from "../../../server/data";
import { SocialMediaItem } from "../../../server/data/types";

const SocialMedia = () => {
  return (
    <div className="social">
      <ul>
        {SocialMediaData.map((val: SocialMediaItem, i: number) => (
          <li key={i}>
            <a href={val.link} target="_blank" rel="noreferrer">
              {val.iconName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
