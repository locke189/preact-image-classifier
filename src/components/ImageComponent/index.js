function ImageComponent(props) {
  const html =
    <div class="image">
      <img class="image__element" crossorigin src={props.src} width={props.width} height={props.height}/>
    </div>;
  return html
}

export default ImageComponent;
