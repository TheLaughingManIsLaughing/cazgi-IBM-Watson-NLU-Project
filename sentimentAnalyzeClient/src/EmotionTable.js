import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
        let emotions = Object.entries(this.props.emotions).map(([key, value]) => {
            return <tr><td>{key}</td><td>{value}</td></tr>
        })

        return (  
            <div>
                <table className="table table-bordered">
                    <tbody>
                    { emotions }
                    </tbody>
                </table>
                </div>
        );
    }
}
export default EmotionTable;
