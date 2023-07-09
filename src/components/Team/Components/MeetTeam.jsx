import { useNavigate } from "react-router-dom";
import "./meetTeam.scss";

const MeetTeam = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex items-center justify-center">
      <button onClick={() => navigate("/team")}>
        <svg
          id="stroke"
          xmlns="http://www.w3.org/2000/svg"
          width="0"
          height="0"
        >
          <defs>
            <path
              id="line"
              d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </defs>
        </svg>

        <div className="">
          <a className="btnOfMeetTeam text-2xl text-off-white tracking-wide">
            Meet Our Team
            <svg className="button-strokeOfMeetTeam" viewBox="0 0 154 13">
              <use href="#line"></use>
            </svg>
            <svg className="button-strokeOfMeetTeam" viewBox="0 0 154 13">
              <use href="#line"></use>
            </svg>
          </a>
        </div>
      </button>
    </div>
  );
};

export default MeetTeam;
