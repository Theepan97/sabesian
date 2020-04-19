import React from "react";
import data from "../static/staticData.json";
import "../styles/Site.scss";
import img1 from "../images/IndexMedia/1.jpg";
import img2 from "../images/IndexMedia/2.jpg";
import img3 from "../images/IndexMedia/3.jpg";
import img4 from "../images/IndexMedia/4.jpg";
import { Link } from "react-router-dom";
import projectData from "../static/ProjectData.json";
import ProjectCardComponent from "../components/ProjectCardComponent";
import { ProjectCategoryComponent } from "../components/ProjectCategoryComponent";

export class HomeComponent extends React.Component {
  componentDidMount() {
    var widget = document.getElementById("medium-widget");
    if (!!widget) {
      window.mediumWidget();
    }
  }

  breadCrumbLinks() {
    this.props.onHeaderClick();
  }

  addFilter(event) {
    const classN = event.target.id;
    const projTypes = Object.values(projectData.ProjectTypes);
    
    if (!!classN) {
      for (const x in projTypes) {
        this.addStyle(projTypes[x], "none");
      }
    }
    if (!!classN && classN !== projectData.ProjectTypes.AllCategories) {
      this.addStyle(classN, "block");
    } else {
      for (const x in projTypes) {
        this.addStyle(projTypes[x], "block");
      }
    }
  }

  addStyle(classN, styleTy) {
    var all = document.getElementsByClassName(classN);
    for (var i = 0; i < all.length; i++) {
      all[i].style.display = styleTy;
    }
  }
  breadCrumbLinks() {
    this.props.onHeaderClick();
  }

  render() {
    return (
      <div onClick={this.breadCrumbLinks.bind(this)}>
        <section className="projects_area p_120">
          <div className="container">
            <div className="main_title">
              <h2>{data.RecentProjects}</h2>
              <p>{data.Home1}</p>
            </div>
            <div className="projects_fillter">
              <ul className="filter list" onClick={this.addFilter.bind(this)}>
              {Object.values(projectData.ProjectTypes).map((val, key) => {
                  return (<ProjectCategoryComponent key={key} val={val}/>)
                })}
              </ul>
            </div>
            <div className="projects_inner row">
            {projectData.Projects.reverse().map((details, index) => {
              return index < 6 ? 
               (
                <ProjectCardComponent
                  key={index}
                  title={details.data.Title}
                  cardDescription={details.data.CardDescription}
                  category={details.data.Category}
                  img={details.data.ImageURL}
                />
              ) :  null;
            })}
              </div>
            <div className="row mt-4">
              <div className="col">
                <div className="blogAside1">
                  <Link to="/projects" className="banner_btn fontSize1">
                    {data.SeeMoreProjects}{" "}
                    <i className="fab fa-github-square"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials_area p_120">
          <div className="container">
            <div className="main_title">
              <h2>{data.Home4}</h2>
              <p>{data.Home2}</p>
            </div>
            <div id="medium-widget" className="styleDesign"></div>

            <div className="feature_inner row">
              <div className="col">
                <div className="blogAside1">
                  <a
                    className="banner_btn fontSize1"
                    href="https://medium.com/@sabesan96"
                    target="_blank"
                  >
                    {data.Home3} <i className="fab fa-medium"></i>edium
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feature_area p_120">
          <div className="container">
            <div className="main_title">
              <h2>my Gallery</h2>
              <p>{data.Home5}</p>
            </div>

            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>

              <div className="carousel-inner">
                <div className="item active">
                  <img src={img1} alt="img1" className="styleDesign" />
                </div>

                <div className="item">
                  <img src={img2} alt="img2" className="styleDesign" />
                </div>

                <div className="item">
                  <img src={img3} alt="img3" className="styleDesign" />
                </div>

                <div className="item">
                  <img src={img4} alt="img4" className="styleDesign" />
                </div>
              </div>

              <a
                className="left carousel-control"
                href="#myCarousel"
                data-slide="prev"
              >
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="right carousel-control"
                href="#myCarousel"
                data-slide="next"
              >
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            <br />

            <div className="feature_inner row">
              <div className="col">
                <div className="blogAside1">
                  <font color="#fff">
                    <Link className="banner_btn fontSize1" to="/media">
                      View All Gallery <i className="fas fa-image"></i>
                    </Link>
                  </font>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
