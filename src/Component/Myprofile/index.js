import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Myprofile = () => {
  return (
   <>
<section className="vh-100" style={{ backgroundImage: "linear-gradient(to right,#770737,#9F2B68,#cd486b,#DA88AE)", width:"100%"}}>
  <div className="container py-5 h-100 mx-auto" style={{width:"1000px"}}>
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-12 col-xl-4">

        <div className="card" style={{borderRadius:"15px", width:"100%"}}>
          <div className="card-body text-center">
            <div className="mt-3 mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" alt=''
                className="rounded-circle img-fluid" style={{width: "100px"}} />
            </div>
            <h4 className="mb-2">Joe</h4>
            <p className="text-muted mb-4">@Developer <span className="mx-2">|</span> <a
                href="#!">mdbootstrap.com</a></p>
            <div className="mb-4 pb-2">
              <button type="button" className="btn btn-outline-primary btn-floating" style={{borderWidth:"0px"}}>
               <FacebookIcon style={{color:"#4267B2",fontSize:"40px"}}/>
              </button>
              <button type="button" className="btn btn-outline-primary btn-floating" style={{borderWidth:"0px"}} >
              <WhatsAppIcon style={{color:"#075E54",fontSize:"40px"}}/>
              </button>
              <button type="button" className="btn btn-outline-primary btn-floating" style={{borderWidth:"0px"}}>
               <InstagramIcon style={{color:"#bc2a8d",fontSize:"40px"}}/>
              </button>
            </div>
            <button type="button" className="btn btn-primary btn-rounded btn-lg" style={{backgroundColor:"purple", borderWidth:"0px"}}>
              Message now
            </button>
            <div className="d-flex justify-content-between text-center mt-5 mb-2">
              <div>
                <p className="mb-2 h5">15</p>
                <p className=" mb-0">Posts</p>
              </div>
              <div className="px-3">
                <p className="mb-2 h5">40</p>
                <p className=" mb-0">Tasks</p>
              </div>
              <div>
                <p className="mb-2 h5">50%</p>
                <p className=" mb-0">Profile Score</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

   </>
  )
}

export default Myprofile;
