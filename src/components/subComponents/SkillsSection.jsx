import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

export default function SkillsSection(){

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
      }));

    return(
        <section id="skills" className="skills">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Skills</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row skills-content">

                <div className="col-lg-6">

                    <div className="progress">
                    <span className="skill">HTML <i className="val">85%</i></span>
                    <div className="progress-bar-wrap">
                        <BorderLinearProgress variant="determinate" value={85} />
                    </div>
                    </div>

                    <div className="progress">
                    <span className="skill">CSS <i className="val">90%</i></span>
                    <div className="progress-bar-wrap">
                        <BorderLinearProgress variant="determinate" value={85} />
                    </div>
                    </div>

                    <div className="progress">
                    <span className="skill">JavaScript <i className="val">75%</i></span>
                    <div className="progress-bar-wrap">
                        <BorderLinearProgress variant="determinate" value={85} />
                    </div>
                    </div>

                </div>

                <div className="col-lg-6">

                    <div className="progress">
                    <span className="skill">PHP <i className="val">80%</i></span>
                    <div className="progress-bar-wrap">
                        <BorderLinearProgress variant="determinate" value={85} />
                    </div>
                    </div>

                    <div className="progress">
                    <span className="skill">WordPress/CMS <i className="val">90%</i></span>
                    <div className="progress-bar-wrap">
                        <BorderLinearProgress variant="determinate" value={85} />
                    </div>
                    </div>

                    <div className="progress">
                    <span className="skill">Photoshop <i className="val">55%</i></span>
                    <div className="progress-bar-wrap">
                        <BorderLinearProgress variant="determinate" value={85} />
                    </div>
                    </div>

                </div>

                </div>

            </div>

            
        </section>
    )
}