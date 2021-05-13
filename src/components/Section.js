import React, { Component } from 'react'
import stars from "../images/stars.png"
import moon from "../images/moon.png"
import mountainsB from "../images/mountains_behind.png"
import mountainsF from "../images/mountains_front.png"


export default class Section extends Component {

    
    render() {
        return (
            <div>
            <section>
                <img src={stars} id="stars" alt="starimg" />
                <img src={moon} id="moon" alt="moonimg" />
                <h2 id="mainTitle">Code House</h2>
                <img src={mountainsB} id="mountains_behind" alt="mountainAimg" />
                <img src={mountainsF} id="mountains_front" alt="mountainBimg" />
            </section>
            <div className="sec">
            <h2>Paralax</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare. Adipiscing bibendum est ultricies integer quis auctor elit sed. Cursus sit amet dictum sit amet justo. Viverra mauris in aliquam sem fringilla ut morbi. Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Cras tincidunt lobortis feugiat vivamus at augue. Nibh venenatis cras sed felis eget velit aliquet. Enim sit amet venenatis urna cursus eget nunc scelerisque. Risus viverra adipiscing at in tellus integer. Morbi tristique senectus et netus et malesuada fames. Suscipit tellus mauris a diam maecenas sed enim ut sem. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Diam vel quam elementum pulvinar etiam.<br />  <br />

At tempor commodo ullamcorper a. Lacinia at quis risus sed vulputate odio ut. Adipiscing elit ut aliquam purus. Viverra orci sagittis eu volutpat odio facilisis mauris. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Enim ut tellus elementum sagittis vitae et leo. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. At consectetur lorem donec massa sapien faucibus et molestie. At imperdiet dui accumsan sit amet nulla. Suspendisse sed nisi lacus sed viverra tellus. Donec ac odio tempor orci dapibus. Enim facilisis gravida neque convallis a. Et malesuada fames ac turpis egestas. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Enim sed faucibus turpis in eu mi bibendum neque. Duis convallis convallis tellus id. <br /> <br />

Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Odio ut sem nulla pharetra diam sit. Praesent elementum facilisis leo vel fringilla est ullamcorper. Aenean sed adipiscing diam donec adipiscing. Sem integer vitae justo eget magna fermentum iaculis eu. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Sollicitudin nibh sit amet commodo nulla. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Tellus in metus vulputate eu scelerisque felis. Lobortis scelerisque fermentum dui faucibus. Tempor commodo ullamcorper a lacus vestibulum. Pellentesque sit amet porttitor eget.</p>
            </div>
            </div>
        )
    }
}
