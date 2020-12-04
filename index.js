function getRepos(userName) {
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      .catch(error => alert("Can't find that user name"))
    
    $('#userName').val('');
}

function displayResults(responseJson) {
    console.log(responseJson);

    $('#results-list').empty();

    //$('#results-list').append(`<li><h3>${responseJson[4].name}</h3></li>`);
    
    
    for (let i=0; i<responseJson.length; i++) {
        $('#results-list').append(`
            <li>
                <p>${responseJson[i].name}</p>
                <a href="${responseJson[i].html_url}" target="_blank">${responseJson[i].html_url}</a>
            </li>`)
    };
    

    $('#results').removeClass('hidden');
};

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      let userName = $('#userName').val();
      console.log(userName);
      getRepos(userName);
    });
}
  
$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});