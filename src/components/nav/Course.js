import React from 'react'
import '../../css/stylesheet.css'


function Course() {
    return (
        <div className="container pt-5 mt-5" id="Courses">
            <h2 className="text-center">Our Courses</h2>

            <div className="row mt-4">
                <div className="col-lg-6 mb-4">
                    <img src="https://images.idgesg.net/images/article/2019/03/javaworld_jvm_jdk_jre_explainer_java_development_kit_write_3x2_2400x1600_by_idg_oracle_vasabii_gettyimages-100790551-large.jpg" alt="" class="img-fluid" />
                </div>

                <div className="col-lg-6">
                    <h2 className="text-center">Learn Java Programming</h2><br></br>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ducimus, modi aut consequatur dolore ut praesentium esse recusandae at amet. Dolorem eius obcaecati ratione, quas laborum consequatur inventore vitae nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos asperiores magnam culpa ullam. Quasi voluptatem eveniet sed velit tempore eaque adipisci magnam recusandae quaerat praesentium illo, animi, sit ratione quo.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nisi atque ipsam optio, iusto explicabo odit suscipit delectus quis eum adipisci quo voluptas laboriosam quisquam sit, sint asperiores eius in!</p>
                </div>

            </div>

            <div className="row mt-4">
                <div className="col-lg-6">
                    <h2 className="text-center">Real World Projects</h2><br></br>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ducimus, modi aut consequatur dolore ut praesentium esse recusandae at amet. Dolorem eius obcaecati ratione, quas laborum consequatur inventore vitae nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos asperiores magnam culpa ullam. Quasi voluptatem eveniet sed velit tempore eaque adipisci magnam recusandae quaerat praesentium illo, animi, sit ratione quo.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nisi atque ipsam optio, iusto explicabo odit suscipit delectus quis eum adipisci quo voluptas laboriosam quisquam sit, sint asperiores eius in!</p>
                </div>

                <div className="col-lg-6 mb-4">
                    <img src="https://static.javatpoint.com/images/java-static-keyword1.png" alt="" className="img-fluid" />
                </div>
            </div>
        </div>

    )
}
export default Course
