
import useJsonFetch from '../utils/Fetcher';

export const FetchRes = ({ opts, url }) => {
 
    const [data, error, loading] = useJsonFetch(url, opts);
    if (loading) {
        return (
            <>
                <p className='content-data loader'>Loading ... </p>
            </>
        )
    }
    if (error) {
        return (
            <>
                <p className='content-data error'>{ error }</p>
            </>
        )
    }
    if (data) {
        return (
            <>
                <p className='content-data'>{ JSON.stringify(data) }</p>
            </>
        )
    }

}