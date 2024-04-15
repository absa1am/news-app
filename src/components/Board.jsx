import Item from "./Item";
import Spinner from "./Spinner";

export default function Board({loadingId, laodingTask, data, boardTitle, handleSearch}) {
    const handleChange = (e) => {
        handleSearch(e.target.value);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            {(loadingId || laodingTask) ? (
                <Spinner />
            ) : (
                <div>
                    <h2 className="text-center mt-2">
                        <span>{boardTitle}</span>
                    </h2>

                    <div className="d-flex justify-content-start align-items-center m-3">
                        Search by
                        <select className="rounded border m-2 p-1" onChange={(e) => handleChange(e)} defaultValue={"Date"}>
                            <option value={"date"}>Date</option>
                            <option value={"popularity"}>Popularity</option>
                        </select>
                        for
                        <select className="rounded border m-2 p-1">
                            <option value={"All time"}>All time</option>
                            <option value={"Last 24h"}>Last 24h</option>
                            <option value={"Past Week"}>Past Week</option>
                            <option value={"Past Month"}>Past Month</option>
                            <option value={"Past Year"}>Past Year</option>
                        </select>
                    </div>
                    
                    {data.map((item, id) => (
                        <Item key={id} title={item.title} points={item.score? item.score:item.points} author={item.by? item.by:item.author} url={item.url} ncomments={item.num_comments >=0 ? `${item.num_comments}`:""} createdAt={item.created_at} />
                    ))}
                </div>
            )}
        </div>
    );
}
