
const YouTubeEmbed = ({ videoId, h }) => {


    return (
        <>
            <div className="flex flex-col mx-auto ">
                <iframe
                    className={`flex items-stretch ${h ? h : "min-h-[70vh]"}  border-2 rounded-md border-info`}
                    title="youtube"
                    src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com`}
                    allowfullscreen=""
                    data-gtm-yt-inspected-2340190_699="true"

                ></iframe>
            </div>


        </>
    );
};

export default YouTubeEmbed;