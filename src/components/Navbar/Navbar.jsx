import { PartitionComponentOne } from "./Styled.components";

const Navbar = () => {
  return (
    <>
      <PartitionComponentOne>
        <nav>
          <div>
            <input placeholder="pesquise por alguma noticia na cidade de diadema" />
          </div>
          <div>
            <h1>logo</h1>
          </div>
          <div>
            <button>Entrar</button>
          </div>
        </nav>
      </PartitionComponentOne>
    </>
  );
};

export default Navbar;
