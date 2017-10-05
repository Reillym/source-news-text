// Used to filter or search for results (still deciding)
const FilterInput = () => (
  <div>
    <input type="text" placeholder="Filter results..." />
    <style jsx>{`
      input {
        width: 250px;
        height: 40px;
        padding: 0 7px;
        font-size: 16px;
        box-shadow: none;
        border: 1px solid #50e3c2;
        border-radius: 3px;
        transition: 0.3s all;
      }
      @media (max-width: 1300px) {
        input {
          display: none;
        }
      }
    `}</style>
  </div>
);

export default FilterInput;
