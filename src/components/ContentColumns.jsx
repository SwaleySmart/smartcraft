import PropTypes from 'prop-types';

function ContentColumns({ reverse = false, padding = '', heading, text, imageSrc}) {
    const orderClass = reverse ? 'lg:flex-row-reverse' : 'lg:flex-row';

    return (
        <div className={`${padding} flex flex-col ${orderClass}`}>
            <div className={`w-full lg:w-6/12 ${reverse ? 'flex justify-end' : ''}`}>
                <img className="w-full lg:w-5/6" src={imageSrc} alt="Description" />
            </div>
            <div className={`w-full lg:w-6/12 p-10 lg:p-0 flex flex-col justify-center ${reverse ? 'items-end' : ''}`}>
                <div className="w-full lg:w-5/6">
                    <h3 className="text-4xl lg:text-5xl font-black">{heading}</h3>
                    <div className="text-lg lg:text-xl font-base mt-10">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

ContentColumns.propTypes = {
    reverse: PropTypes.bool,
    text: PropTypes.string.isRequired,
    padding: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
};

export default ContentColumns;