import React from 'react';

function ProductState(props) {
    return (
        <div>
            <h1 className='title'>وضعیت</h1>
            <input type="radio" id="html" name="fav_language" value="active" ref={state} />
            <label htmlFor="html">موجود در انبار</label><br />
            <input type="radio" id="css" name="fav_language" value="hide" ref={state} />
            <label htmlFor="css">قابل سفارش</label><br />
            <input type="radio" id="javascript" name="fav_language" value="date" ref={state} />
            <label htmlFor="javascript">انتشار در زمان مشخص</label>

            <div style={{ direction: "rtl" }}>
                <p>زمان انشار</p>
                <DatePicker
                    calendar={persian}
                    locale={persian_fa}
                    calendarPosition="bottom-right"
                    value={date}
                    onChange={(date) => {
                        setDate(date);
                        console.log(date.toDate().toLocaleString());
                    }}
                />
            </div>
        </div>
    );
}

export default ProductState;