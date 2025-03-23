import { videos } from "./videoItems.js";

let videoGrid = document.querySelector(".video-grid")

let video = videos;

const fragment = document.createDocumentFragment()

videos.forEach((video)=>{
    const videoPreview = document.createElement("div")
    videoPreview.classList.add("video-preview")
    const thumbnailArea = document.createElement("a")
    thumbnailArea.href=video.link

    const thumbRow = document.createElement("div")
    thumbRow.classList.add("thumb-row")

    const image = document.createElement("img")
    image.classList.add("thumbnail")
    image.src = video.thumbnail
    image.alt = "thumbnail"

    const time = document.createElement("div")
    time.classList.add("video-time")
    time.innerText = video.time

    thumbRow.appendChild(image)
    thumbRow.appendChild(time)

    thumbnailArea.appendChild(thumbRow)

    const videoInfoGrid = document.createElement("div")
    videoInfoGrid.classList.add("video-info-grid")

    const channelPic = document.createElement("div")
    channelPic.classList.add("chan-pic")
    
    const channelLink = document.createElement("a")
    channelLink.setAttribute("href", video.channelLink)

    const channelProf = document.createElement("img")
    channelProf.classList.add("chan-prof")
    channelProf.src = video.channelPic
    channelProf.alt=video.channelName
    channelLink.appendChild(channelProf)

    const channelTooltip = document.createElement("div")
    channelTooltip.classList.add("chan-tool-tip")

    const ttProfile = document.createElement("img")
    ttProfile.classList.add("tt-prof")
    ttProfile.src = video.channelPic

    const tt = document.createElement("div")
    const ttAuthor = document.createElement("div")
    ttAuthor.classList.add("tt-author")
    ttAuthor.innerText = video.channelName
    const ttSubs = document.createElement("div")
    ttSubs.classList.add("tt-subs")
    tt.innerText = video.subscribers

    tt.appendChild(ttAuthor)
    tt.appendChild(ttSubs)

    channelTooltip.appendChild(ttProfile)
    channelTooltip.appendChild(tt)

    channelPic.appendChild(channelLink)
    channelPic.appendChild(channelTooltip)

    videoInfoGrid.appendChild(channelPic)

    const videoInfo = document.createElement("div")
    videoInfo.classList.add("video-info")

    const videoLink = document.createElement("a")
    videoLink.href = video.link

    const videoTitle = document.createElement("p")
    videoTitle.classList.add("video-title")
    videoTitle.innerText = video.videoTitle
    videoLink.appendChild(videoTitle)

    const videoAuthor = document.createElement("a")
    videoAuthor.href = video.channelLink
    const author = document.createElement("p")
    author.classList.add("author")
    author.innerText = video.channelName
    videoAuthor.appendChild(author)

    const views = document.createElement("p")
    views.classList.add("views")
    views.innerText = `${video.views} views · ${video.timeSinceReleased}`

    videoInfo.append(videoLink,videoAuthor, views)

    videoInfoGrid.appendChild(videoInfo)

    videoPreview.append(thumbnailArea, videoInfoGrid)
    fragment.append(videoPreview)

})
videoGrid.appendChild(fragment)