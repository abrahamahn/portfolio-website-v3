import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { setActiveSectionIndex } from "../../redux/actions";
import { ProjectsData } from "../../../server/data";
import { BlogData } from "../../../server/data";
import useWindowWidth from "../../hooks/useWindowWidth";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  useEffect(() => {
    if (inView) {
      dispatch(setActiveSectionIndex(0));
    }
  }, [inView, dispatch]);

  return (
    <div
      ref={ref}
      id="home"
      style={{
        width: "100%",
        margin: "0 auto",
        height: "calc(var(--vh, 1vh) * 100)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: isMobile ? "absolute" : "relative",
        top: isMobile ? "55px" : undefined,
        bottom: isMobile ? "0px" : undefined,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          height: isMobile ? "95%" : "auto",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflowX: "hidden",
        }}
      >
        {/* Projects Section */}
        <div style={{ width: "100%", marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "1.1rem",
              paddingLeft: isMobile ? "16px" : "36px",
              color: "rgba(255, 255, 255, 0.9)",
              marginBottom: "20px",
            }}
          >
            PROJECTS
          </h2>
          <div
            style={{
              width: "100%",
              display: "grid",
              position: "relative",
              gridTemplateColumns: isMobile
                ? "repeat(auto-fill, minmax(300px, 1fr))"
                : "repeat(auto-fill, minmax(300px, 1fr))",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              overflowX: "hidden",
              padding: isMobile ? "20px 5px" : undefined,
              paddingBottom: isMobile ? "200px" : undefined,
            }}
          >
            {ProjectsData.map((project, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  margin: "0 auto",
                  alignItems: "center",
                  borderRadius: "20px",
                  maxWidth: "320px",
                  height: "220px",
                  backgroundColor: "rgba(0, 0, 0, 0.25)",
                  border: "1px solid rgba(255, 255, 255, 0.7)",
                  transition: "background-color 0.3s ease-in-out",
                  width: isMobile ? "90%" : "100%",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.25)")
                }
              >
                <div
                  style={{
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    zIndex: 0,
                    borderRight: "1px solid #d5d5d5",
                  }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "20px 0px 0px 20px",
                      }}
                    />
                  </a>
                </div>
                <div
                  style={{
                    width: "50%",
                    height: "100%",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    padding: "10px",
                    backgroundColor: "#00000007",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        overflowX: "hidden",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: isMobile ? "0.8rem" : "12px",
                          margin: "0",
                          padding: "0",
                          color: "white",
                          height: isMobile ? "1rem" : "auto",
                          overflow: "hidden",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.55rem",
                          margin: "0px 0 1px 0",
                          color: "white",
                        }}
                      >
                        {new Date(project.postedDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          fontWeight: 500,
                          width: "auto",
                          marginTop: "8px",
                        }}
                      >
                        {project.categories.map((category, i) => (
                          <span
                            key={i}
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.2)",
                              padding: "2px",
                              color: "white",
                              marginRight: "3px",
                              fontSize: "8px",
                              borderRadius: "5px",
                            }}
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <div
                        style={{
                          display: "inline-block",
                          fontWeight: 500,
                          marginRight: "5px",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {project.stacks.map((stack, i) => (
                          <span
                            key={i}
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.2)",
                              padding: "2px",
                              color: "white",
                              marginRight: "3px",
                              fontSize: "8px",
                              borderRadius: "5px",
                            }}
                          >
                            {stack}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p
                    className="description-container"
                    style={{
                      fontSize: isMobile ? "0.55rem" : "10px",
                      marginTop: isMobile ? "0px" : "10px",
                      color: "white",
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Section */}
        <div style={{ width: "100%" }}>
          <h2
            style={{
              fontSize: "1.1rem",
              paddingLeft: isMobile ? "16px" : "36px",
              color: "rgba(255, 255, 255, 0.9)",
              marginBottom: "20px",
            }}
          >
            BLOG
          </h2>
          <div
            style={{
              width: "100%",
              display: "grid",
              position: "relative",
              gridTemplateColumns: isMobile
                ? "repeat(auto-fill, minmax(300px, 1fr))"
                : "repeat(auto-fill, minmax(300px, 1fr))",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              overflowX: "hidden",
              padding: isMobile ? "20px 5px" : undefined,
              paddingBottom: isMobile ? "200px" : undefined,
            }}
          >
            {BlogData.map((blog, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  margin: "0 auto",
                  alignItems: "center",
                  borderRadius: "20px",
                  maxWidth: "320px",
                  height: "220px",
                  backgroundColor: "rgba(0, 0, 0, 0.25)",
                  border: "1px solid rgba(255, 255, 255, 0.7)",
                  transition: "background-color 0.3s ease-in-out",
                  width: isMobile ? "90%" : "100%",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.25)")
                }
              >
                <div
                  style={{
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    zIndex: 0,
                    borderRight: "1px solid #d5d5d5",
                  }}
                >
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      src={blog.image}
                      alt={blog.alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "20px 0px 0px 20px",
                      }}
                    />
                  </a>
                </div>
                <div
                  style={{
                    width: "50%",
                    height: "100%",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    padding: "10px",
                    backgroundColor: "#00000007",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        overflowX: "hidden",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: isMobile ? "0.8rem" : "12px",
                          margin: "0",
                          padding: "0",
                          color: "white",
                          height: isMobile ? "1rem" : "auto",
                          overflow: "hidden",
                        }}
                      >
                        {blog.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.55rem",
                          margin: "0px 0 1px 0",
                          color: "white",
                        }}
                      >
                        {new Date(blog.postedDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          fontWeight: 500,
                          width: "auto",
                          marginTop: "8px",
                        }}
                      >
                        {blog.categories.map((category, i) => (
                          <span
                            key={i}
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.2)",
                              padding: "2px",
                              color: "white",
                              marginRight: "3px",
                              fontSize: "8px",
                              borderRadius: "5px",
                            }}
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p
                    className="description-container"
                    style={{
                      fontSize: isMobile ? "0.55rem" : "10px",
                      marginTop: isMobile ? "0px" : "10px",
                      color: "white",
                    }}
                  >
                    {blog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
