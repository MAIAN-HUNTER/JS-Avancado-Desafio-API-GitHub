const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class= "info">
                        <img src="${user.avatarUrl}" alt="Foto do perfil de usuario"/>
                            <div class="data">
                                <h1>${user.name ?? 'O nome não está munido de cadastro 😪🍷'}</h1>
                                <h2>${user.login ?? 'O usuario não está munido de login 😪🍷'}</h>
                                <p>${user.bio ?? 'A bio não está munida de cadastro 😪🍷'}</p>
                                <h3>${'Seguidores: '}${user.followers}</h3>
                                <h4>${'Seguindo: '}${user.following}</h4>
                            </div>
                        </div>`
                
    if(user.repositories.length > 0){
    let repositoriesItens = ''
    user.repositories.forEach(repo => 
                        
    repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">
                            <h4>${repo.name}</h4>
                            <i class="forks">🍴 ${repo.forks_count}</i>
                            <i class="stars">⭐ ${repo.stargazers_count}</i>
                            <i class="watchers">👀 ${repo.watchers_count}</i>
                            <i class="language">👩‍💻 ${repo.language ?? 'Sem linguagem'}</i>
                            </a></li>`)  
                
    this.userProfile.innerHTML += `<div class="repositories section">
                                    <h2>Repositórios</h2>
                                    <ul>${repositoriesItens}</ul>
                                    </div>`  
                        }
    if(user.events.length > 0){            
    let eventsItens = ''         
    user.events.forEach(event =>

        eventsItens += `<li>${event.repo.name}${event.message}</li>`)
                
    this.userProfile.innerHTML += `<div class="events section">
                                    <h2>Atividades</h2>
                                    <ul>${eventsItens}</ul>
                                    </div>` 
    }
},
    renderNotFound(){
    this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}
                
export { screen }