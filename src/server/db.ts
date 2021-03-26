import firebaseApp from "./firebase";

const database = firebaseApp.database();

class AddrDataBase {
	read(name: string, callback: any) {
		database.ref(`address/${name}`).on("value", (snapshot) => {
			const val = snapshot.val();
			snapshot.val() && callback(val);
		});
	}

	add() {}

	remove() {}
	
	update(selectName: string, friendName: string, phone: string, address: string) {
		const postData = {
			friendName, phone, address
		}
		database.ref(`address/${selectName}/${friendName}`).update(postData);
	}
}

export default AddrDataBase;
