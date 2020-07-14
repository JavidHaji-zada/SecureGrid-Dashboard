import React from 'react';
import './styles.css'
import { Image } from 'react-bootstrap';
import Header from '../../components/Header/Header';
const About = () => {
    return (
        <div>
            <Header />
            <div className="d-flex flex-column aboutContainer">
                <Image src={require('../../assets/secure-grid.jpg')} fluid />
                <h2 className='mt-3'>SecureGrid</h2>
                <p>Europe is transforming the current obsolete electricity network into an advanced, digitised and more efficient one known as the Smart Grid. One major innovative aspect of the project relies on applying AI and Big Data analysis techniques to the large amounts of data gathered by the Smart Grid. The massive collection of data occurring within Smart Grids also creates new threats that will be addressed by the second major innovative aspect of this project, which is security improvement.</p>
                <p>The deployment of Automatic Metering Infrastructure (AMI) will make an unseen quantity of rich information available in near real-time (Daily electric energy usage; Power peak demand; Last interval demand; Load profile; Voltage value; Voltage profile; Logs of voltage …) and we believe there is a definite need to address advanced ways to use this available information.</p>
                <p>One major innovative aspect of the project relies on applying AI and Big Data analysis techniques on the large amounts of data gathered by the Smart Grid. The application of these techniques is a further step that allows reasoning, gathering knowledge, planning intelligently and learning to efficiently manage security breaches. Four applications have been identified and will be addressed:</p>
                <ul>
                    <li>
                        <strong>Revenue protection</strong>
                        {' '}involving early detection of energy leakage, possibly linked to frauds or tampering attempt
                </li>
                    <li>
                        <strong>Demand response,</strong>
                        {' '}getting customers to increase or decrease their energy consumption to balance system load
                </li>
                    <li>
                        <strong>Outage management,</strong>
                        {' '}where AMI data is being used for early detection of outages and to help outage restoration in the case of adverse events such as hurricane or other weather-related episodes
                </li>
                    <li>
                        <strong>Predictive analysis</strong>
                        {' '}of grid behaviour aims at predicting future grid behaviour of the from the analysis of AMI data.
                </li>
                </ul>
                <p>The massive collection of data occurring within smart grids also creates new threats which need to be addressed. Hence, the second major innovative aspect of this project is focused upon security improvement, and particularly at architecture level, we propose here a security architecture addressing the problem of credential distribution enabling end to end security to be achieved between devices and applications. It also features dynamic fine-grained authorization management to control finely which application is entitled to use which data.</p>
                <p>The SecureGrid project partners have a strong commitment to developing solutions and services within the energy sector, and the consortium has been conformed in order to include companies and research centers which have proven outstanding knowledge in the main fields that the project covers: Smart Grids, Smart Metering, security, AI, Big Data.</p>
                <p>The SecureGrid project brings together 11 partners from 2 European countries (Spain, and Turkey), covering the value chain for SecureGrid. In total 2 large industries (one of them is an end-user), 7 SMEs and 2 Universities.</p>
            </div>
        </div>

    )
}

export default About