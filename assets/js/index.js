const helloWorld = () => {
  console.log("Hello World");
};

helloWorld();

/* CORRECTION */

const headers = document.querySelectorAll( ".list__item__header" );

const showItemBody = event => {
  console.log( 'clicked', event.target );

  const currentHeader = event.target
                      .closest( '.list__item__header' );
  console.log( 'closest', currentHeader );


  const currentBody = currentHeader.nextElementSibling;

  // Toggle body for clicked element
  if ( currentBody.classList.contains( 'show' ) ) {
    currentBody.classList.remove( 'show' );
  } else {
    currentBody.classList.add( 'show' );
  }

  // Hide all other texts
  headers.forEach( header => {
    const body = header.nextElementSibling;

    if ( body != currentBody ) {
      
      body.classList.remove( 'show' );
    }
  } );
}

headers.forEach( header  => {

  // Replace artistinfo 
  const artistInfo = header.querySelector( ':scope .list__item__artist' );
  const artistInfoText = artistInfo.innerText;

  console.log( artistInfoText, artistInfoText.split( ' ' ) );
  
  let artistInfoYear = artistInfoText.split( ' ' ).pop( );
  artistInfoYear = artistInfoYear.substr( 0, 4 );

  artistInfo.innerText = artistInfoYear;


  // Make headers clickable
  header.addEventListener( 'click', showItemBody );
} );


//replaceTextByDateOfBirth();