const { title } = props;
title = title ?? "New frens";

State.init({
  profiles: {},
});

const LensLib = VM.require("mattb.near/widget/NearBadger.Libs.Lens");

let recentlyVerified = LensLib.listRecentlyVerifiedProfiles({
  subscribe: true,
});

const Section = styled.div`
    overflow:hidden;

    h1 {
        font-weight:bold;
        font-size:1.8rem;
        margin-bottom:1.3rem;
        padding:0 1.8rem;
    }
`;

const Carousel = styled.div`
  display:flex;
  flex-direction:column;
  flex-wrap:no-wrap;
  padding:0 1.8rem 1rem;

  > div {
    :not(:last-of-type) {
      margin-right:15px;
    }
  }
`;

const Pill = styled.div`
  display:flex;
  width:100%;
  padding:1rem;
  margin-bottom:20px;
  align-items:center;
  border-radius:20px;
  background-color:#FAFAFA;
  border: 1px solid rgba(0,0,0,.05);
  box-sizing:border-box;
  padding:1.5rem;

  .description {
    margin-left:1rem;

    h2 {
      font-size:1.2rem;
      margin:0;
      padding:0;
    }
  }
`;

const Avatar = styled.div`
  display:flex;
  flex-grow:1;
  width:100%;
  max-width:60px;
  height:60px;
  border-radius:100%;
  background-color:rgba(0,0,0,.05);
  overflow:hidden;
  flex-shrink:0;
  border:1px solid rgba(0,0,0,.05);
  
  @media screen and (max-width:300px) {
      max-width:30px;
      height:30px;
  }

  img {
    max-width:100%;
  }
`;

return (
  <Section>
    <h1>{title}</h1>
    <Carousel>
      {recentlyVerified.map((profile) => (
        <Pill>
          <Avatar></Avatar>
          <div className="description">
            <h2>
              <strong>@{profile.accountId}</strong> has linked{" "}
              <strong>@{profile.value.name}</strong> to their account
            </h2>
          </div>
        </Pill>
      ))}
    </Carousel>
  </Section>
);
