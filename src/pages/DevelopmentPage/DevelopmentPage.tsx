import { Waves } from '../../components/Waves';
import { useResize } from '../../hooks/useWidthOfWindow';
import { IMG } from '../../images';
import * as SC from './DevelopmentPage.styled';

const DevelopmentPage = () => {
  const { isScreenTabletOnly } = useResize();

  return (
    <>
      <SC.Disclaimer>
        <SC.DisclaimerText>Website in development</SC.DisclaimerText>
      </SC.Disclaimer>
      <SC.Main>
        <div className="container">
          <SC.LogoWrapper>
            <SC.Logo src={IMG.logo} alt="logo" width="400" />
            <SC.MainContent>
              <SC.MainTitle>WOW! Clean & Shine</SC.MainTitle>
              <SC.ContactsList>
                <li>
                  <SC.Contact href="tel:8036341263">(803)634-1263</SC.Contact>
                </li>
                <li>
                  <SC.Contact href="tel:8035072505">(803)507-2505</SC.Contact>
                </li>
                <li>
                  <SC.Contact href="mailto:wowcleanandshine@gmail.com">
                    wowcleanandshine@gmail.com
                  </SC.Contact>
                </li>
              </SC.ContactsList>
              {!isScreenTabletOnly && (
                <SC.ContentList>
                  <SC.TextCard>
                    <h2 style={{ textAlign: 'center' }}>About us</h2>
                    <p>
                      “WOW Clean & Shine” is a local, family-owned and operated
                      business with a strong reputation for quality cleaning and
                      quality service. We use the highest quality of commercial
                      grade cleaners which work to elimiate any mold or mildew,
                      build-up or dirt on the exterior of your property.
                    </p>
                  </SC.TextCard>
                  <SC.TextCard>
                    <h2 style={{ textAlign: 'center' }}>Our service</h2>
                    <p>
                      Pressure washing , gutter cleaning, soft washing, roof
                      cleaning , concrete cleaning, oxidation removal, car
                      detailing, commercial cleaning, churches.
                    </p>
                  </SC.TextCard>
                </SC.ContentList>
              )}
            </SC.MainContent>
          </SC.LogoWrapper>
          {isScreenTabletOnly && (
            <SC.ContentList>
              <SC.TextCard>
                <h2 style={{ textAlign: 'center' }}>About us</h2>
                <p>
                  “WOW Clean & Shine” is a local, family-owned and operated
                  business with a strong reputation for quality cleaning and
                  quality service. We use the highest quality of commercial
                  grade cleaners which work to elimiate any mold or mildew,
                  build-up or dirt on the exterior of your property.
                </p>
              </SC.TextCard>
              <SC.TextCard>
                <h2 style={{ textAlign: 'center' }}>Our service</h2>
                <p>
                  Pressure washing , gutter cleaning, soft washing, roof
                  cleaning , concrete cleaning, oxidation removal, car
                  detailing, commercial cleaning, churches.
                </p>
              </SC.TextCard>
            </SC.ContentList>
          )}
          <SC.ContentList>
            <SC.ImgItem>
              <SC.Img src={IMG.example1} alt="logo" />
            </SC.ImgItem>
            <SC.ImgItem>
              <SC.Img src={IMG.example3} alt="logo" />
            </SC.ImgItem>
            <SC.ImgItem>
              <SC.Img src={IMG.example2} alt="logo" />
            </SC.ImgItem>
          </SC.ContentList>
        </div>
        <Waves />
      </SC.Main>
    </>
  );
};

export default DevelopmentPage;
