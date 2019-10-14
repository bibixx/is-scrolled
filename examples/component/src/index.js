import React from "react";
import ReactDOM from "react-dom";
import IsScrolled from "is-scrolled";

import { Container, Content } from "./components";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <IsScrolled>
        {({ containerRef, contentRef, isScrolledTo }) => (
          <>
            <Container ref={containerRef}>
              <Content ref={contentRef}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                  eget dolor sit amet leo pretium semper non a tellus. Donec purus
                  urna, tempus non nisi ut, porttitor convallis elit. Vestibulum
                  malesuada, lectus ac pharetra malesuada, purus lorem ultricies ex,
                  vitae maximus tortor ex sit amet mi. Etiam eu porta turpis.
                  Pellentesque habitant morbi tristique senectus et netus et malesuada
                  fames ac turpis egestas. Mauris pulvinar, libero at porttitor
                  iaculis, eros ipsum egestas nunc, a porta eros ligula id velit. Duis
                  venenatis porta consequat. Praesent vitae rutrum urna. Curabitur
                  condimentum ex sit amet nibh tempor rutrum. Fusce ut urna
                  sollicitudin, vulputate sem ut, auctor est. In hac habitasse platea
                  dictumst. In venenatis vehicula eleifend. Ut sit amet diam dui. Sed
                  malesuada sodales erat sed dignissim. Etiam egestas rhoncus ipsum,
                  ut lobortis tellus aliquet luctus. Vestibulum iaculis tellus vitae
                  faucibus aliquet.
                </p>
                <p>
                  Aliquam aliquet ante nec convallis consectetur. Vivamus pellentesque
                  mauris in massa interdum bibendum. Fusce eu nisi sapien. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. In nec venenatis lorem,
                  ac iaculis lorem. Maecenas condimentum pretium ante, ac ultricies
                  quam tristique in. Sed vel augue a lorem fringilla ultrices quis et
                  erat. Nunc vel finibus mauris. Nullam a finibus nunc. Cras et nisl
                  massa. Nam tempus diam at quam porta aliquam. Phasellus cursus elit
                  in ipsum luctus venenatis. Curabitur pharetra tellus enim, vel
                  rutrum libero ullamcorper ac. Nullam a mauris vitae dolor convallis
                  vestibulum eu ut metus. Quisque congue lacus vitae tellus fermentum,
                  quis finibus orci laoreet. Mauris eget accumsan ante, sit amet
                  pellentesque metus.
                </p>
                <p>
                  Donec vulputate elit erat, lobortis mollis orci auctor at. Aliquam
                  tempor lacus a quam rutrum consectetur. Class aptent taciti sociosqu
                  ad litora torquent per conubia nostra, per inceptos himenaeos.
                  Curabitur tortor urna, luctus a diam eleifend, rhoncus elementum
                  metus. Etiam congue vitae ligula ut pharetra. Praesent efficitur
                  nunc eget massa luctus ultricies. Interdum et malesuada fames ac
                  ante ipsum primis in faucibus. Quisque sed mattis arcu. Maecenas
                  ultricies, odio ut convallis aliquam, lacus turpis aliquam nibh, at
                  varius turpis nibh nec arcu. Vivamus interdum ante ipsum, ac varius
                  tellus finibus ut.
                </p>
                <p>
                  Ut maximus luctus mauris non sollicitudin. Quisque accumsan purus id
                  purus viverra blandit nec feugiat justo. Duis interdum, lectus
                  luctus pharetra rutrum, ex leo vehicula nulla, ut ultricies tellus
                  diam ut nisl. Nullam posuere, ipsum sed porttitor hendrerit, sapien
                  sem blandit ligula, non ultricies diam ipsum in velit. Nullam ac sem
                  fermentum, pellentesque ligula nec, accumsan est. Aenean eros
                  ligula, ullamcorper ut urna vitae, auctor volutpat odio. Donec sed
                  ullamcorper est. Suspendisse aliquet auctor nisl, et posuere mauris
                  eleifend a. Curabitur vitae auctor purus, a ultrices erat. Fusce
                  ornare neque eget consectetur laoreet. Proin aliquet sit amet erat
                  eget tincidunt. Fusce quam nibh, eleifend non risus ac, cursus
                  tempus libero. Proin sagittis dapibus tincidunt. Vivamus nec
                  ullamcorper lacus. Sed purus velit, semper at sollicitudin et,
                  sollicitudin ut justo. Morbi euismod tortor vel viverra aliquet.
                </p>
                <p>
                  Curabitur quis turpis bibendum, pretium felis nec, pharetra nunc.
                  Morbi eu enim placerat, sollicitudin nulla sit amet, hendrerit est.
                  Sed tristique at lorem fringilla blandit. Vivamus ut lacus quis
                  lorem feugiat feugiat. Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas. In pulvinar
                  ultricies nulla vitae hendrerit. Duis mollis augue sed nisl
                  eleifend, eget tristique purus hendrerit. Etiam semper enim eget
                  quam volutpat ullamcorper. Nullam ipsum magna, imperdiet ut arcu
                  sed, sodales malesuada nunc.
                </p>
                <p>
                  Suspendisse potenti. Integer ac dolor eu lorem tincidunt blandit.
                  Donec et volutpat ex, vel ultrices velit. Proin nibh nunc,
                  pellentesque ut semper in, posuere quis lorem. Interdum et malesuada
                  fames ac ante ipsum primis in faucibus. Integer libero quam,
                  ultrices in ligula id, maximus tincidunt nibh. Quisque fermentum
                  risus a mauris semper, et auctor leo scelerisque. Sed laoreet, leo
                  sed luctus tincidunt, nulla nisl varius risus, a gravida tortor ante
                  vel nibh. Donec et est felis. Maecenas in ornare orci. Nulla
                  lobortis cursus diam quis euismod. Morbi eget velit et dui posuere
                  mattis nec vitae turpis. Sed nec gravida est. Fusce vel enim
                  egestas, sagittis magna nec, dignissim ex. Donec nec aliquam diam,
                  sit amet consectetur tellus. Integer pellentesque orci non eros
                  tristique, non mollis diam suscipit.
                </p>
                <p>
                  Maecenas nisi orci, sagittis a augue sed, congue gravida ex. Nunc
                  purus ipsum, cursus eget risus sit amet, facilisis vulputate risus.
                  Mauris nec vestibulum nisi, quis interdum diam. Curabitur interdum
                  nunc ac orci vestibulum, nec lacinia risus hendrerit. Aliquam
                  dignissim nulla lobortis odio suscipit, ac convallis ligula tempus.
                  Curabitur blandit ultrices nisi, facilisis gravida ipsum. Sed rutrum
                  tempus orci, eget scelerisque odio auctor eget. Praesent non nunc
                  velit. Curabitur ultrices in nibh a porta. Maecenas rhoncus lorem
                  quis neque congue facilisis. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum scelerisque tortor enim, eget maximus
                  sem convallis a. Duis quis placerat sem, in pharetra quam.
                </p>
                <p>
                  Aliquam id ipsum eget dui feugiat sagittis. Nam ligula massa,
                  consequat sed viverra non, faucibus id lorem. Nunc nec nunc eget
                  metus vulputate rutrum. Sed porttitor dictum erat, malesuada
                  scelerisque justo vehicula at. Suspendisse lobortis at enim at
                  posuere. Vestibulum venenatis ligula et enim interdum, id posuere
                  urna blandit. Nunc vulputate nec dui nec consequat. Praesent vel
                  erat id urna faucibus faucibus.
                </p>
                <p>
                  Morbi hendrerit ac magna vel lacinia. Sed purus justo, lobortis at
                  commodo eu, lacinia sed ligula. Donec scelerisque, justo eget
                  vulputate pulvinar, odio velit laoreet est, quis pharetra sem tortor
                  eu augue. Curabitur sed lorem sit amet eros interdum accumsan eget
                  vel metus. In pellentesque blandit neque. Curabitur varius mi
                  rhoncus mollis ullamcorper. Donec pellentesque tellus nec dolor
                  viverra, vel hendrerit enim mattis. Fusce sed volutpat ante. Vivamus
                  sed velit pretium augue viverra blandit.
                </p>
                <p>
                  In ultricies diam odio, sit amet egestas lectus congue in. Fusce
                  sollicitudin, augue at bibendum fringilla, tortor ante tempor urna,
                  et viverra mi purus vitae elit. Cras nec condimentum nisi, vel
                  consequat enim. Curabitur ut arcu ac urna ultrices ultricies sit
                  amet non diam. Aenean non cursus orci. Nullam iaculis, odio quis
                  ornare iaculis, lectus erat vestibulum lacus, quis vestibulum nunc
                  nunc vel augue. Mauris non nisl a sem rhoncus auctor. Integer
                  pellentesque id sem id suscipit. Nam sed ligula urna. Aliquam
                  imperdiet convallis nisl ac eleifend.
                </p>
                <p>
                  Fusce pellentesque quam ut justo pellentesque dictum. Aliquam erat
                  volutpat. Cras a commodo ligula. Fusce magna mi, tincidunt molestie
                  iaculis id, volutpat vitae enim. Sed risus justo, elementum eget
                  ipsum nec, elementum sollicitudin velit. Etiam a massa quam.
                  Praesent eget imperdiet elit. Nullam metus risus, dictum sit amet
                  augue vitae, blandit faucibus purus. Donec blandit massa id erat
                  commodo viverra. Curabitur at lorem tincidunt, iaculis ante ut,
                  dignissim felis. Nullam vel diam urna. Quisque tempus quam nec
                  aliquam tincidunt.
                </p>
                <p>
                  Nunc dapibus libero vitae mi sollicitudin sodales. Etiam rutrum
                  neque in libero fringilla, in scelerisque diam tempus. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames ac
                  turpis egestas. Praesent lobortis faucibus rutrum. Nullam non sapien
                  urna. Fusce ultricies convallis aliquet. Maecenas ex arcu, tincidunt
                  at turpis non, accumsan viverra dui. In condimentum dictum viverra.
                  Duis fringilla accumsan leo, eget aliquam eros sagittis a. Cras
                  pharetra dui vel enim maximus mattis. Aenean eu dignissim est, a
                  commodo neque. Aliquam commodo eget purus eget facilisis. Cras
                  sodales, nisl eget pretium vulputate, sem lacus scelerisque dolor, a
                  aliquam mi nulla eu magna.
                </p>
                <p>
                  Nullam eget erat non turpis volutpat cursus id sed felis. Aenean
                  faucibus eleifend dapibus. Donec imperdiet, metus vel porta
                  tincidunt, massa odio interdum risus, quis tempor quam justo sit
                  amet lacus. Integer sit amet interdum mauris. Ut tristique non enim
                  id pulvinar. Sed rutrum lectus eu lacus auctor dignissim. Curabitur
                  eu nibh vitae arcu auctor iaculis. Fusce imperdiet convallis massa,
                  cursus commodo est fringilla eu. Vivamus sagittis varius mattis.
                  Nunc cursus nisi at purus pharetra, at accumsan leo cursus.
                </p>
                <p>
                  Ut sed dolor in nisl placerat dictum. Quisque a quam volutpat,
                  ultricies ex vitae, euismod erat. Etiam ornare mauris dui.
                  Pellentesque habitant morbi tristique senectus et netus et malesuada
                  fames ac turpis egestas. Integer vel erat hendrerit, pulvinar urna
                  vel, mollis arcu. Phasellus tortor erat, scelerisque et purus id,
                  maximus varius orci. Integer condimentum dui nibh, eu porta ante
                  elementum eu. Vivamus eleifend turpis facilisis nisl laoreet
                  gravida. Sed interdum blandit egestas. Quisque eu lacinia neque, in
                  eleifend urna. Quisque tincidunt quam tellus, ac bibendum augue
                  auctor ac. Fusce quam enim, scelerisque non auctor at, volutpat eget
                  velit. Aliquam erat volutpat. In pharetra a metus in imperdiet.
                </p>
                <p>
                  In maximus arcu leo, eu ultrices metus ullamcorper in. Etiam at diam
                  auctor, sagittis ipsum nec, lobortis diam. Mauris convallis
                  consectetur feugiat. Integer sem lacus, pulvinar tincidunt gravida
                  in, viverra et libero. Etiam eget massa faucibus, gravida eros quis,
                  rutrum magna. Praesent commodo mattis tortor non malesuada. Morbi
                  varius augue cursus, vestibulum dolor nec, eleifend neque. Mauris
                  hendrerit egestas dolor. Nullam dictum porttitor lorem. Quisque sed
                  metus iaculis, molestie massa ac, vulputate sapien. Nulla posuere
                  elit mauris, in condimentum nunc faucibus et. In sagittis rhoncus
                  purus sed facilisis. Aliquam fringilla enim ac lobortis egestas.
                </p>
              </Content>
            </Container>
            <br />
            <p>{JSON.stringify(isScrolledTo)}</p>
          </>
        )}
      </IsScrolled>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
