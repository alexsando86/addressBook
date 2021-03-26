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
	update() {
		console.log(database.ref());
	}
}

export default AddrDataBase;
