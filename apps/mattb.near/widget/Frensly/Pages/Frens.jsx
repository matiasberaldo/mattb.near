const LensLib = VM.require("mattb.near/widget/NearBadger.Libs.Lens");

let frens = LensLib.getIdentity({
  order: "asc",
  limit: 50,
});

const Frens = styled.div`
    display:flex;
    flex-wrap:wrap;
    padding:1.8rem;

    > div {
        margin-bottom:20px;
        
        :not(:last-of-type) {
            margin-right:20px;
        }
    }
`;

const Profile = styled.div`
  width:240px;
  background-color:#fafafa;
  border:1px solid rgba(0,0,0,.05);
  border-radius:20px;
  text-align:center;
  display:flex;
  flex-direction:column;
  border-radius:20px;
  background-color:#F2F2F2;
  border: 3px solid rgba(0,0,0,.05);
  box-sizing:border-box;
  padding:1.5rem;

  * {
      flex-grow:0;
      align-self:center;
  }

  h1 {
    font-size:1.1rem;
    margin-bottom:20px;
  }

  p {
    position:relative;
    display:inline-block;
    border-radius:20px;
    padding:.4rem 1rem .4rem 35px;
    color:#000;
    font-size:.8rem;
    overflow:hidden;
    border:1px solid rgba(0,0,0,.1);
    z-index:0;
    cursor:pointer;
    transition:all .2s;
    background-color:rgba(0,0,0,.05);
    min-width:160px;
    margin:0;

    :hover {
        box-shadow: 0 0 0 3px rgba(0,0,0,.1);
    }

    .badge, .verified {
      border-radius:0;
      display:flex;
      align-items:center;
      justify-content:center;
      width:20%;
      min-width:35px;
      height:100%;
      position:absolute;
      left:0;
      top:0;

      img {
        display:block;
        position:relative;
        padding:0;
        margin:0;
        left:1px;
        width:20px;
        pointer-events:none;
      }
    }

    .verified {
        left:unset;
        right:0;
        background-color:transparent;
        border:0;
    }
  }

  button {
    border-radius:20px;
    padding:.3rem 2rem;
    font-weight:bold;
    background-color:#388909;
    border:1px solid rgba(0,0,0,.1);
    transition:all .2s;

    :hover {
        box-shadow: 0 0 0 3px rgba(0,0,0,.1);
        background-color:#388909;
    }
  }
`;

const ProfileHeader = styled.div`
  height:30%;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Image = styled.div`
  width:70px;
  height:70px;
  background-color:rgba(0,0,0,.05);
  border-radius:100%;
`;

return (
  <Frens>
    {frens.map(({ accountId, value: { name } }) => (
      <Profile>
        <h1>@{accountId}</h1>
        <p>
          <span className="badge">
            <img
              src="https://ipfs.near.social/ipfs/bafkreiggkmczb7v43nicdia4n7xqkgynopby5k3nxs3zj6fij5eeurh23i"
              width="100%"
            />
          </span>
          {name}
          <span className="verified"></span>
        </p>
      </Profile>
    ))}
  </Frens>
);
