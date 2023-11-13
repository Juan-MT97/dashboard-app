import BarChartBox from '../../components/charts/barChartBox/BarChartBox';
import LineChartBox from '../../components/charts/lineChartBox/LineChartBox';
import { chartsData } from '../../utils/data';
import './analytics.scss';

const Analytics: React.FC = () => {
    return (
        <main className='analytics_container'>
            <section className='analytics_title'>
                <label className='font_analytics'>ANALYTICS</label>
            </section>
            <section className='analytics_charts'>
                <LineChartBox data={chartsData} />
                <BarChartBox data={chartsData} />
            </section>
        </main>
    )
}

export default Analytics
