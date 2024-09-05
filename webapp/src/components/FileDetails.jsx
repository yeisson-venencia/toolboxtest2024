const FileDetails = ({ file }) => {
  return (
    <>
      {file.lines.map(({ text, number, hex }) => (
        <tr style={{ fontSize: 12 }} key={text}>
          <td>{file.file}</td>
          <td>{text}</td>
          <td>{number}</td>
          <td>{hex}</td>
        </tr>
      ))}
    </>
  );
};

export default FileDetails;
